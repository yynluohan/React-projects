import React from 'react';
import { Form,Input,Button,Select,Row,Col,message,DatePicker,InputNumber } from 'antd';
import { query } from '../../../framework/utils/services';
import Selection from '../../../common/Selection';
import PublicLayout from '../../../common/layout/PublicLayout';
import TableInSpin from '../../../common/TableInSpin';
import moment from 'moment';

const FormItem = Form.Item;
const { TextArea } = Input;
const formatDate = window.MC.DATETIMEFORMAT

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

 class ContractForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      item: {},
      items: [], //选中的合约产品
      type: props.type || 'add',
    }
  }

  componentWillReceiveProps(nextProps){
    const { items } = this.state;
    if (nextProps.item != undefined) {
      const item = nextProps.item;
      this.setState({
        item,
        items: items.length > 0 ? items : item.items,
      })
    }
  }

  onSave = () => {
    let { item,items,type } = this.state;
    const { validateFields,getFieldsValue } = this.props.form;
    validateFields((errors) => {
      if (errors) {
        return;
      }
      if (item.length === 0) {
        message.error('必须选择有一项合约产品！');
        return;
      }

      items.map((item,index) => {
        items[index] = {
          ...item,
          finalPrice: item.price - (item.totalPpd ? item.totalPpd : 0),
          totalPpd: item.totalPpd || 0,
        }
        if (type == 'add') {
          delete items[index].id
        }
      })
      const data = {
        ...item,
        ...getFieldsValue(),
        items,
        contractPlanId:item.id
      };
      if (type == 'add') {
        delete data.id;
        delete data.name;
        delete data.note;
      }
      this.props.onSave(data)
    });
  }

  //选择合约产品
  selectProduct = (data) => {
    const { item } = this.state;
    if (data.length > 0) {
      query(`/api/pub/tenant/contract/plan/${data[0].id}/details`).then(({ code,data }) => {
        if (code === 200) {
          if (data.items && data.items.length === 0) {
            message.warn('当前合约产品暂无模块，请重新选择！')
            return;
          }
          data.items && data.items.length > 0 && data.items.map((item,index) => {
            data.items[index] = {
              ...item,
              totalPpd:0,
              finalPrice: item.price,
            }
          })
          this.setState({
            items: data.items,
            item: {
              ...data,
              ...item
            }
          })
        }
      })
    }
  }

  onChangePpd = (e,record) => {
    let { items } = this.state;
    items.map((item,index) => {
      if (item.id === record.id) {
        items[index].totalPpd = e;
        items[index].finalPrice = item.price - e
      }
    })
    this.setState({
      items
    })
  }

  render() {

    const { getFieldDecorator } = this.props.form;
    const { item,items,type } = this.state;

    const tableProps = {
      list: items,
      loading: false,
      columns: [
        {
          title: '子系统名称',
          key: 'subsysName',
          dataIndex: 'subsysName'
        },
        {
          title: '名称',
          key: 'moduleName',
          dataIndex: 'moduleName'
        },
        {
          title: '价格',
          key: 'price',
          dataIndex: 'price'
        },
        {
          title: '描述',
          key: 'note',
          dataIndex: type == 'add' ? 'note' : 'moduleNote'
        },
        {
          title: '最终价格',
          key: 'finalPrice',
          dataIndex: 'finalPrice'
        },
        {
          title: '折扣',
          key: 'totalPpd',
          render: (record) => (
            <InputNumber onChange={(e) => this.onChangePpd(e,record)}
              max={record.price}
              min={0}
              value={record.totalPpd}
            />
          )
        }
      ]
    }


    const selectionProps = {
      isButton:true,
      butName:'选择合约产品',
      modalTitle: '选择合约产品',
      apiUrl:'/api/pub/tenant/contract/plan',
      method: query,
      columns:[
        {
          title: '名称',
          key: 'name',
          dataIndex: 'name'
        },
        {
          title: '类型名称',
          key: 'typeName',
          dataIndex: 'typeName'
        },
        {
          title: '产品编号',
          key: 'planNumber',
          dataIndex: 'planNumber'
        },
        {
          title: '价格',
          key: 'price',
          dataIndex: 'price'
        },
        {
          title: '有效周期',
          key: 'period',
          dataIndex: 'period'
        }
      ],
      selected:this.selectProduct,
    }

    return(
      <PublicLayout>
        <h2>{type == 'add' ? '添加合约' : '修改合约' }</h2>
        <div style={{ marginBottom: '1em'}}>
          <Selection {...selectionProps}/>
        </div>
        {
          items.length > 0 ?
          <Form>
            <Row>
              <Col span={12}>
                <FormItem label="开始时间：" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('startTime', {
                    initialValue: item.startTime ? moment(item.startTime,formatDate) : '',
                    rules: [
                      {
                        required: true,
                        message:'请填写开始时间'
                      },
                    ],
                  })(<DatePicker format={formatDate} style={{width:'200px'}} />)}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="结束时间：" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('closeTime', {
                    initialValue: item.closeTime ? moment(item.closeTime,formatDate) : '',
                    rules: [
                      {
                        required: true,
                        message:'请填写结束时间'
                      },
                    ],
                  })(<DatePicker format={formatDate} style={{width:'200px'}}/>)}
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <FormItem label="隐秘价格：" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('privatePrice', {
                    initialValue: item.privatePrice,
                    rules: [
                      {
                        required: false,
                        message:'请填写隐秘价格'
                      },
                    ],
                  })(<Input type="text" />)}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="价格：" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('price', {
                    initialValue: item.price,
                    rules: [
                      {
                        required: true,
                        message:'请填写价格'
                      },
                    ],
                  })(<Input type="number" />)}
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <FormItem label="总折扣：" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('totalPpd', {
                    initialValue: item.totalPpd,
                    rules: [
                      {
                        required: false,
                        message:'请选择总折扣'
                      },
                    ],
                  })(<Input />)}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="剩余有效次数：" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('enableTerm', {
                    initialValue: item.enableTerm,
                    rules: [
                      {
                        required: false,
                        message:'请选择'
                      },
                    ],
                  })(<Input />)}
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <FormItem label="是否自动续约：" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('autoRenew', {
                    initialValue: item.autoRenew,
                    rules: [
                      {
                        required: false,
                        message:'请选择'
                      },
                    ],
                  })(
                    <Select>
                      <Select.Option value={0}>否</Select.Option>
                      <Select.Option value={1}>是</Select.Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="是否长期有效：" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('longTerm', {
                    initialValue: item.longTerm,
                    rules: [
                      {
                        required: false,
                        message:'请选择'
                      },
                    ],
                  })(
                    <Select>
                      <Select.Option value={0}>否</Select.Option>
                      <Select.Option value={1}>是</Select.Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <FormItem label="校对者：" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('verifier', {
                    initialValue: item.verifier,
                    rules: [
                      {
                        required: false,
                        message:'请填写'
                      },
                    ],
                  })(<Input />)}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="是否预付：" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('prepay', {
                    initialValue: item.prepay,
                    rules: [
                      {
                        required: false,
                        message:'请选择'
                      },
                    ],
                  })(
                    <Select>
                      <Select.Option value={0}>非预付</Select.Option>
                      <Select.Option value={1}>付款</Select.Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <FormItem label="是否有效：" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('invalid', {
                    initialValue: item.invalid,
                    rules: [
                      {
                        required: false,
                        message:'请填写'
                      },
                    ],
                  })(
                    <Select>
                      <Select.Option value={0}>有效</Select.Option>
                      <Select.Option value={1}>无效</Select.Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
          </Form>
          : ''
        }
        <div style={{ height: '1px',backgroundColor: '#f2f2f2',margin:'1em 0'}}/>
        {
          items.length > 0 ?
          <TableInSpin {...tableProps}/>
          : ''
        }
        <div style={{ textAlign: 'center',margin: '2em 0'}}>
          {
            items.length > 0 ?
            <Button type='primary' style={{ marginRight: '1em'}} onClick={this.onSave}>保存</Button>
            :''
          }
          <Button onClick={() => window.history.go(-1)}>返回</Button>
        </div>
      </PublicLayout>
    )
  }

}

export default Form.create()(ContractForm)
