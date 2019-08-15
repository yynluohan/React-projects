import React from 'react';
import { Modal,Form,Input,Select,Radio } from 'antd';
import { query } from '../../../framework/utils/services'

const FormItem = Form.Item;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 20,
  },
  width: 1000,
};

 class ModuleModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: props.item || {},
      permissionList: [], //模块权限
      selectedPerm: {}  //选择的权限
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
    const { item,selectedPerm } = this.state;
    validateFields((errors) => {
      if (errors) {
        return;
      }
      const type = Object.keys(item).length === 0 ? 'add' : 'edit';
      const data = {
        ...getFieldsValue(),
        permGroupName: selectedPerm.name || item.permGroupName,
      }
      this.props.onSubmit(data,type)
    })
  }

  onClick = (item) => {
    this.setState({
      selectedPerm: item
    })
  }

  render() {

    const { getFieldDecorator } = this.props.form;
    const { visible } = this.props;
    const { item,permissionList } = this.state;

    return (
      <Modal
          title={Object.keys(item).length === 0 ? '添加模块' : '修改模块'}
          width = '800px'
          visible
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Form>
          <FormItem label="名称" hasFeedback {...formItemLayout}>
            {getFieldDecorator('name', {
              initialValue: item.name,
              rules: [
                {
                  required: true,
                  message: '请填写名称！',
                },
              ],
            })(
              <Input rows={4}/>
            )}
          </FormItem>
          <FormItem label="价格" hasFeedback {...formItemLayout}>
            {getFieldDecorator('price', {
              initialValue: item.price,
              rules: [
                {
                  required: true,
                  message: '请填写价格！',
                },
              ],
            })(<Input type='number'/>)}
          </FormItem>
          <FormItem label="备注" hasFeedback {...formItemLayout}>
            {getFieldDecorator('note', {
              initialValue: item.note,
              rules: [
                {
                  required: false,
                  message: 'Please select!',
                },
              ],
            })(<TextArea rows={4}/>)}
          </FormItem>
          <FormItem label="权限" hasFeedback {...formItemLayout}>
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
                      <Radio value={item.id} onClick={() => this.onClick(item)}>{item.name}</Radio>
                    </div>
                  ))
                }
              </Radio.Group>
            )}
          </FormItem>
          </Form>
        </Modal>
    )
  }
}

export default Form.create()(ModuleModal)
