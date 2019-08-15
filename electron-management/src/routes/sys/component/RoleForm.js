import React from 'react';
import { Form, Input,Button } from 'antd';
import Boxes from './Boxes';

const { TextArea } = Input;
const FormItem = Form.Item;

const formItemLayout = (a,b) => {
  return{
    labelCol: {
      span: a || 4,
    },
    wrapperCol: {
      span: b || 18,
    },
  }
};

class RoleForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      item: {},
      list: [],
      permIds: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item != undefined) {
      this.setState({
        item: nextProps.item
      })
    }
    if (nextProps.list != undefined) {
      this.setState({
        list: nextProps.list
      })
    }
  }

  onSubmit = (value) => {
    const { validateFields,getFieldsValue } = this.props.form;
    validateFields((errors) => {
      if (errors) {
        return;
      }
      const data = {
        ...getFieldsValue(),
        permIds: value,
      }
      this.props.onOk(data);
    });
  }


  render(){

    const { getFieldDecorator } = this.props.form;
    const { item,list } = this.state;

    const boxesProps = {
      list,
      currentPerm: item.sysPerms,
      onBack: this.props.onBack,
      onOk: this.onSubmit
    }

    return(
      <Form>
        <div style={{ backgroundColor: '#fff',padding:'20px'}}>
          <h2>{this.props.title}</h2>
            <FormItem label="角色名：" hasFeedback {...formItemLayout()}>
              { getFieldDecorator('name', {
                initialValue: item.name,
                rules: [
                  { required: true, message: '角色名未填写' },
                ],
              })( <Input type="text" /> ) }
            </FormItem>
            <FormItem label="描述：" hasFeedback {...formItemLayout()}>
              { getFieldDecorator('tips', {
                initialValue: item.tips
              })( <TextArea rows={4} /> ) }
            </FormItem>
            <FormItem label="权限：" hasFeedback {...formItemLayout()}>
              <Boxes {...boxesProps}/>
            </FormItem>
         </div>
      </Form>
    )
  }
}

export default Form.create()(RoleForm);
