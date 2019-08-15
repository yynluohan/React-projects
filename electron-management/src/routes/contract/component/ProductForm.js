import React from 'react';
import { Form,Input,Button,Select,Row,Col,message } from 'antd';
import { query } from '../../../framework/utils/services';
import Selection from '../../../common/Selection';
import PublicLayout from '../../../common/layout/PublicLayout';
import TableInSpin from '../../../common/TableInSpin';
import SubSysModal from './SubSysModal';

const FormItem = Form.Item;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

 class ProductForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      productTypeList: [],  //产品类型
      visible: false,
      items: [],
      item: {},
      unitType: '',
    }
  }

  componentWillReceiveProps(nextProps){
    const { items } = this.state;
    if (nextProps.item != undefined) {
      const item  = nextProps.item;
      item.items && item.items.length > 0 && item.items.map((k,index) => {
        item.items[index] = {
          ...k,
          name: k.moduleName
        }
      })
      this.setState({
        productTypeList: item.typeId ? [{id: item.typeId,name: item.typeName || ''}] : [],
        items: items.length > 0 ? items : item.items,
        item,
      })
    }
  }

  onSave = () => {
    let { items,productTypeList,item } = this.state;
    const { validateFields,getFieldsValue } = this.props.form;
    validateFields((errors) => {
      if (errors) {
        return;
      }
      if (productTypeList.length === 0) {
        message.error('请选择产品类型！')
        return;
      }
      if (items.length === 0) {
        message.error('请选择一个系统模块！')
        return;
      }
      items.map((item,index) => {
        items[index] = {
          ...item,
          moduleId: item.id,
          moduleName: item.name
        }
        delete items[index].id
      })

      const data = {
        ...item,
        ...getFieldsValue(),
        items,
        typeId: productTypeList[0].id || '',
      };
      this.props.onSave(data)
    });
  }

  onChange = (e) => {
    this.setState({
      unitType: e
    })
  }

  render() {

    const { getFieldDecorator } = this.props.form;
    const { productTypeList,visible,items,item,unitType } = this.state;

    const selectionProps = {
      isButton:true,
      butName:'选择类型',
      modalTitle: '选择类型',
      apiUrl:'/api/crud/contract/contractPlan/types',
      method: query,
      columns:[
        {
          title:'名称',
          key:'name',
          dataIndex:'name'
        },
        {
          title:'价格',
          key:'price',
          dataIndex:'price'
        },
        {
          title:'备注',
          key:'note',
          dataIndex:'note'
        }
      ],
      selected:(data) => this.setState({ productTypeList: data}),
    }

    const tableProps = {
      list: items,
      loading: false,
      columns: [
        {
          title: '名称',
          key: 'name',
          dataIndex: 'name'
        },
        {
          title: '价格',
          key: 'price',
          dataIndex: 'price'
        },
        {
          title: '描述',
          key: 'note',
          dataIndex: 'note'
        }
      ]
    }

    const modalProps = {
      visible,
      onBack:() => this.setState({ visible: false }),
      onSubmit: (data) => this.setState({items: data,visible: false })
    }

    return(
      <PublicLayout>
        <Form>
          <h2>{this.props.type == 'add' ? '添加合约产品' : '修改合约产品'}</h2>
          <Row>
            <Col span={12}>
              <FormItem label="产品类型：" hasFeedback {...formItemLayout}>
                { productTypeList.length > 0 && productTypeList[0].name }
                <Selection {...selectionProps}/>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="名称：" hasFeedback {...formItemLayout}>
                {getFieldDecorator('name', {
                  initialValue: item.name,
                  rules: [
                    {
                      required: true,
                      message:'请填写名称'
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
                      required: false,
                      message:'请填写价格'
                    },
                  ],
                })(<Input type="number" />)}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="有效周期：" hasFeedback {...formItemLayout}>
                {getFieldDecorator('period', {
                  initialValue: item.period,
                  rules: [
                    {
                      required: false,
                      message:'请填写有效周期'
                    },
                  ],
                })(<Input type="text" />)}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="单位：" hasFeedback {...formItemLayout}>
                {getFieldDecorator('unit', {
                  initialValue: item.unit,
                  rules: [
                    {
                      required: false,
                      message:'请选择单位'
                    },
                  ],
                })(
                  <Select onChange={(e) => this.onChange(e)}>
                    <Select.Option value='YEAR'>年</Select.Option>
                    <Select.Option value='MONTH'>月</Select.Option>
                    {/*<Select.Option value='DAY'>日</Select.Option>
                    <Select.Option value='HOUR'>时</Select.Option>
                    <Select.Option value='MINUTE'>分</Select.Option>*/}
                    <Select.Option value='TIMES'>次</Select.Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            {
              unitType === 'TIMES' ?
              <Col span={12}>
                <FormItem label="有效次数：" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('enableTimes', {
                    initialValue: item.enableTimes,
                    rules: [
                      {
                        required: false,
                        message:'请填写有效次数'
                      },
                    ],
                  })(<Input type="text" />)}
                </FormItem>
              </Col>
              : ''
            }
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
            <Col span={12}>
              <FormItem label="备注：" hasFeedback {...formItemLayout}>
                {getFieldDecorator('note', {
                  initialValue: item.note,
                  rules: [
                    {
                      required: false,
                      message:'请填写备注'
                    },
                  ],
                })(
                  <TextArea rows={4}/>
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
        <div style={{ height: '1px',backgroundColor: '#f2f2f2',margin:'1em 0'}}/>
        <Button type='primary' style={{ marginBottom: '1em'}}
          onClick={() => this.setState({ visible: true })}
          >选择产品模块</Button>
        <TableInSpin {...tableProps}/>
        { visible ? <SubSysModal {...modalProps}/> : '' }
        <div style={{ textAlign: 'center',margin: '2em 0'}}>
          <Button type='primary' style={{ marginRight: '1em'}} onClick={this.onSave}>保存</Button>
          <Button onClick={() => window.history.go(-1)}>返回</Button>
        </div>
      </PublicLayout>
    )
  }

}

export default Form.create()(ProductForm)
