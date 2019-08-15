import React from 'react';
import { Form,Col,Row,Input,Button,message,Radio } from 'antd';
import { query } from '../../../framework/utils/services';
import Selection from '../../../common/Selection';

const FormItem = Form.Item;
const { TextArea } = Input;

const formItemLayout = (a,b) => {
  return {
    labelCol: {
      span: a || 6,
    },
    wrapperCol: {
      span: b || 18,
    },
  }
};

class AddMoudleForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedList: [],
      item:{},
      permissionList: []
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
    if (nextProps.item != undefined) {
      this.setState({
        item: nextProps.item,
        selectedList:nextProps.item ? [{id: nextProps.item.subsysId,name: nextProps.item.subsysName}] : []
      })
    }
  }

  onSubmit = () => {
    const { validateFields,getFieldsValue } = this.props.form;
    const { selectedList,item } = this.state;
    validateFields((errors) => {
      if (errors) {
        return;
      }
      if (selectedList.length == 0) {
        message.error('请选择一个系统！')
        return;
      }
      const data = {
        ...getFieldsValue(),
        subsysId: selectedList[0].id,
      };
      this.props.onSave(data)
    });
  }

 render() {

   const { getFieldDecorator } = this.props.form;
   const { selectedList,item,permissionList } = this.state;

   const selectionProps = {
     isButton:true,
     butName:'选择系统',
     modalTitle: '选择系统',
     apiUrl:'/api/crud/subsys/subsyses',
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
     selected:(data) => this.setState({ selectedList: data}),
   }

   return (
     <div style={{ backgroundColor: '#fff',padding: '20px'}}>
       <h2>{this.props.title}</h2>
       <Form>
         <Row>
          <Col span={12}>
            <FormItem label='系统' hasFeedback {...formItemLayout()}>
              {selectedList.length > 0 && selectedList[0].name}<Selection {...selectionProps}/>
            </FormItem>
          </Col>
         </Row>
         <Row>
           <Col span={12}>
             <FormItem label='名称' hasFeedback {...formItemLayout()}>
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
            <FormItem label='价格' hasFeedback {...formItemLayout()}>
              {getFieldDecorator('price', {
                initialValue: item.price,
                rules: [
                  {
                    required: false,
                  },
                ],
              })(<Input type="number" />)}
            </FormItem>
          </Col>
         </Row>
         <Row>
           <Col span={24}>
             <FormItem label='备注' hasFeedback {...formItemLayout(3,21)}>
               {getFieldDecorator('note', {
                 initialValue: item.note,
                 rules: [
                   {
                     required: false,
                   },
                 ],
               })(<TextArea rows={4} />)}
             </FormItem>
           </Col>
         </Row>
         <Row>
           <Col span={24}>
             <FormItem label='权限' hasFeedback {...formItemLayout(3,21)}>
               {getFieldDecorator('permGroupId', {
                 initialValue: item.permGroupId,
                 rules: [
                   {
                     required: false,
                   },
                 ],
               })(
                 <Radio.Group style={{ display:'flex',flexWrap:'wrap'}}>
                   {
                     permissionList.length > 0 && permissionList.map((item,index) => (
                       <div key={index} style={{ width: '22%'}}>
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
       <div style={{textAlign: 'right',marginTop:'2em'}}>
        <Button type='primary' style={{ marginRight: '1em'}} onClick={this.onSubmit}>保存</Button>
        <Button onClick={this.props.onBack}>返回</Button>
       </div>
     </div>
   )
 }

}

export default Form.create()(AddMoudleForm)
