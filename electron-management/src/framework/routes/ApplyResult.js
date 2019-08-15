import React from 'react';
import { Input,message,Form,Button } from 'antd';
import styles from './applyResult.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

const FormItem = Form.Item;

class ApplyResult extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  check = (rule, value, callback) => {
      const { getFieldValue } = this.props.form;
      const emailReg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
      const phoneReg = /^(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57])[0-9]{8}$/g;
      if (value) {
        if (!emailReg.test(value) && !phoneReg.test(value)) {
          callback('请输入正确的邮箱/电话号码！')
        }
      } else {
        callback('请填写邮箱/电话号码！')
      }
      callback()
   }

   onView = () => {
     const { validateFields,getFieldsValue } = this.props.form;
     const emailReg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
     const phoneReg = /^(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57])[0-9]{8}$/g;
     validateFields((errors) => {
       if (errors) {
         return;
       }
       let data = {
         ...getFieldsValue(),
       }
       if (phoneReg.test(data.email) && !emailReg.test(data.value)) {
         data.phone = data.email;
         delete data.email
       }
       this.props.dispatch({
         type: 'login/onGetApplyResult',
         payload:data
       })
     })
   }

   onBackLogin = () => {
     window.location.href = '#' + '/login'
   }

  render() {

    const { getFieldDecorator } = this.props.form;
    const { applyResultData } = this.props.login;

    const statusMap = {
      'PENDING': '审核中，请耐心等待',
      'APPROVED':'审批通过',
      'APPROVE_FAIL':'审批不通过',
      'CLOSED':'已关闭',
    }

    return (
      <Form>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div>申请结果</div>
              <span onClick={() => this.onBackLogin()}>返回登录</span>
            </div>
              <FormItem style={{width:'70%',marginTop:'2em'}}>
                {getFieldDecorator('email', {
                  rules: [
                    {
                      validator: this.check
                    }
                  ],
                })(
                  <Input style={{height:'40px',fontSize:'16px'}}
                   placeholder='邮箱/手机号码'
                  />
                )}
              </FormItem>
              <FormItem style={{width:'70%',marginTop:'1em'}}>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '请填写密码！',
                    }
                  ],
                })(
                  <Input style={{height:'40px',fontSize:'16px'}}
                   onChange={(e) => this.setState({ password: e.target.value })}
                   type='password'
                   placeholder='密码'
                  />
                )}
              </FormItem>

              {
                applyResultData.status ?
                <div className={styles.applyResult}>
                  申请结果：
                  <span>{statusMap[applyResultData.status]}</span>
                </div>
                : ''
              }
              <div className={styles.but} onClick={() => this.onView()}>点击查询</div>
          </div>
        </div>
     </Form>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

const ApplyResultForm = Form.create()(ApplyResult)

export default connect(mapStateToProps)(ApplyResultForm)
