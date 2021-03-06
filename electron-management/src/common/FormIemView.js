import React from 'react';
import { Form,Row,Col,Button,Table } from 'antd';
import CardLayout from './layout/CardLayout';


const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

class FormIemView extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      spanNumber: props.spanNumber || 2,
      list: props.list || [],
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list != undefined) {
      this.setState({
        list: nextProps.list
      })
    }
  }

  render() {

    const { title, isHiddenBackBut=false } = this.props;
    const { spanNumber } = this.state;
    let { list } = this.state;
    let newList = [];
    list.length > 0 && list.map((item) => {
      if (list.length < spanNumber) {
        newList.push({ list: list.splice(0)})
      } else {
        newList.push({ list: list.splice(0,spanNumber)})
      }
    })
    if (list.length > 0) {
      newList.push({ list: list.splice(0)})
    }

    const createColmns = (data) => {
      data.map((item,index) => {
        data[index] = {
          ...item,
          dataIndex: item.value,
          key: item.value,
        }
      })
      return data
    }

    return (
      <div style={{ background: '#fff',padding: '20px'}}>
        <h2>{title || ''}</h2>
        <Form>
            {
              newList.length > 0 && newList.map((item,index) => (
                <Row key={index}>
                  {
                    item.list.length > 0 && item.list.map((k,i) => {
                      if (k.columns) {
                        return (
                          <Col span={24} key={i}>
                            <CardLayout title={k.label}>
                              <Table columns={createColmns(k.columns)} dataSource={k.data} pagination={false}/>
                            </CardLayout>
                          </Col>
                        )
                      } else {
                        return (
                          <Col key={i} span={k.span || 24/spanNumber}>
                            <FormItem label={k.label} hasFeedback {...formItemLayout}>
                              {k.data || ''}
                            </FormItem>
                          </Col>
                        )
                      }
                    })
                  }
                </Row>
              ))
            }
        </Form>
        {
          !isHiddenBackBut ?
          <div style={{textAlign:'right',marginTop:'2em'}}>
            <Button type='primary' onClick={() => window.history.go(-1)}>返回</Button>
          </div>
          : null
        }

     </div>
    )
  }
}

export default FormIemView
