import React from 'react';
import { Modal,Form,Input,Radio,Select,Row,Col } from 'antd';
import { query } from '../../../framework/utils/services'

const FormItem = Form.Item;

const formItemLayout = (a,b) => {
  return {
    labelCol: {
      span: a || 4,
    },
    wrapperCol: {
      span: b || 16,
    },
    width: 800,
  }
};

 class MenuModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: props.item || {},
      permissionList: [], //模块权限
    }
  }

  componentDidMount() {
    query('/api/adm/perm_groups').then(({ code,data }) => {
      if (code === 200) {
        this.setState({
          permissionList: data
        })
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item) {
      this.setState({
        item: nextProps.item,
      })
    }
  }

  handleCancel = () => {
    this.props.onBack()
  }

  handleOk = () => {
    const { getFieldsValue,validateFields } = this.props.form;
    const { item } = this.state;
    validateFields((errors) => {
      if (errors) {
        return;
      }
      const data = {
        ...item,
        ...getFieldsValue(),
      }
      this.props.onSubmit(data)
    })
  }

  render() {

    const { getFieldDecorator } = this.props.form;
    const { visible } = this.props;
    const { item,permissionList } = this.state;

    return (
      <Modal
          title= { Object.keys(item).length > 0 ? '编辑子菜单' : '添加子菜单' }
          width = '900px'
          visible
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Form>
          <Row>
            <Col span={12}>
              <FormItem label="菜单名" hasFeedback {...formItemLayout()}>
                {getFieldDecorator('name', {
                  initialValue: item.name,
                  rules: [
                    {
                      required: true,
                      message: '请填写名称！',
                    },
                  ],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="排序" hasFeedback {...formItemLayout()}>
                {getFieldDecorator('sortNum', {
                  initialValue: item.sortNum,
                  rules: [
                    {
                      required: false,
                      message: '请填写排序！',
                    },
                  ],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="菜单图标" hasFeedback {...formItemLayout()}>
                {getFieldDecorator('icon', {
                  initialValue: item.icon,
                  rules: [
                    {
                      required: false,
                      message: '请填写图标！',
                    },
                  ],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="菜单链接" hasFeedback {...formItemLayout()}>
                {getFieldDecorator('url', {
                  initialValue: item.url,
                  rules: [
                    {
                      required: false,
                      message: '请填写菜单链接！',
                    },
                  ],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="是否启用" hasFeedback {...formItemLayout()}>
                {getFieldDecorator('enabled', {
                  initialValue: item.enabled,
                  rules: [
                    {
                      required: false,
                      message: '请选择！',
                    },
                  ],
                })(
                  <Select>
                    <Select.Option value={1}>启用</Select.Option>
                    <Select.Option value={0}>禁用</Select.Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="是否隐藏" hasFeedback {...formItemLayout()}>
                {getFieldDecorator('invisible', {
                  initialValue: item.invisible,
                  rules: [
                    {
                      required: false,
                      message: '请选择！',
                    },
                  ],
                })(
                  <Select>
                    <Select.Option value={1}>隐藏</Select.Option>
                    <Select.Option value={0}>显示</Select.Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="备注" hasFeedback {...formItemLayout()}>
                {getFieldDecorator('remarks', {
                  initialValue: item.remarks,
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label="权限" hasFeedback {...formItemLayout(2,20)}>
                {getFieldDecorator('permGroupId', {
                  initialValue: item.permGroupId,
                  rules: [
                    {
                      required: false,
                      message: 'Please select!',
                    },
                  ],
                })(
                  <Radio.Group style={{ display:'flex',flexWrap:'wrap'}}>
                    {
                      permissionList.length > 0 && permissionList.map((item,index) => (
                        <div  key={index} style={{ width: '25%'}}>
                          <Radio value={item.id}>{item.name}</Radio>
                        </div>
                      ))
                    }
                  </Radio.Group>
                )}
              </FormItem>
              </Col>
            </Row>
          </Form>
        </Modal>
    )
  }
}

export default Form.create()(MenuModal)
