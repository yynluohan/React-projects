import React from 'react';
import { Form,Col,Row,Input,Button,message,Divider } from 'antd';
import { query } from '../../../framework/utils/services';
import ModuleModal from './ModuleModal';
import TableInSpin from '../../../common/TableInSpin';

const FormItem = Form.Item;
const { TextArea } = Input
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

class SysSysForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      item:{},
      visible: false,
      items: [],
      modalItem: {},
      selectIndex: undefined,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item != undefined) {
      this.setState({
        item: nextProps.item,
        items: nextProps.item && nextProps.item.items,
      })
    }
  }

  onSubmit = () => {
    const { validateFields,getFieldsValue } = this.props.form;
    let { items } = this.state;
    validateFields((errors) => {
      if (errors) {
        return;
      }
      if (items.length === 0) {
        message.error('请添加一个子模块');
        return;
      }
      const data = {
        ...getFieldsValue(),
        items
      };
      this.props.onSave(data)
    });
  }

  onSaveItems = (data,type) => {
    let { items,selectIndex } = this.state;
    if (type === 'edit') {
      items[selectIndex] = {
        ...items[selectIndex],
        ...data,
      }
    } else {
      items.push(data);
    }
    this.setState({
      items,
      visible: false,
      modalItem: {}
    })
  }

  onRemove = (index) => {
    let { items } = this.state;
    items.splice(index,1);
    this.setState({
      items,
    })
  }

 render() {

   const { getFieldDecorator } = this.props.form;
   const {item,visible,items,modalItem } = this.state;

   const modalProps = {
     item: modalItem,
     visible,
     onBack:() => this.setState({ visible: false,modalItem:{} }),
     onSubmit:(data,type) => this.onSaveItems(data,type)
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
       },
       {
         title: '权限',
         key: 'permGroupName',
         dataIndex: 'permGroupName'
       },
       {
         title: '操作',
         key: 'oprate',
         render: (record,text,index) => (
           <div>
             <a onClick={() => this.setState({ visible: true,modalItem: record,selectIndex: index})}>修改</a>
             <Divider type="vertical"/>
             <a onClick={() => this.onRemove(index)}>移除</a>
           </div>
         )
       }
     ]
   }

   return (
     <div style={{ backgroundColor: '#fff',padding: '20px'}}>
       <h2>{this.props.title}</h2>
       <Form>
         <Row>
          <Col span={12}>
            <FormItem label='名称' hasFeedback {...formItemLayout}>
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
            <FormItem label='价格' hasFeedback {...formItemLayout}>
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
          <Col span={12}>
            <FormItem label='备注' hasFeedback {...formItemLayout}>
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
       </Form>

       <Button type='primary' onClick={() => this.setState({ visible: true})}>添加子系统模块</Button>
       <TableInSpin {...tableProps}/>
       <div style={{textAlign: 'right',marginTop:'2em'}}>
        <Button type='primary' style={{ marginRight: '1em'}} onClick={this.onSubmit}>保存</Button>
        <Button onClick={this.props.onBack}>返回</Button>
       </div>
      { visible ? <ModuleModal {...modalProps}/> : ''}
     </div>
   )
 }

}

export default Form.create()(SysSysForm)
