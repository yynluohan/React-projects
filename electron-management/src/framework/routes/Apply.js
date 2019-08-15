import React from 'react';
import { Input,message,Form,Select,Button,Radio } from 'antd';
import styles from './apply.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { create } from '../utils/services'

const FormItem = Form.Item;
const { TextArea } = Input;

class Apply extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      password: '',
      passwordAgain: '',
      registerType: 'email',  //注册类型
      code: '', //验证码
      applyType: '', //申请类型
      isShowTime: false
    }
  }

  //点击注册按钮
  onApplyOk = () => {
    const { validateFields,getFieldsValue } = this.props.form;
    const { password,passwordAgain,registerType } = this.state;
    let data = {};
    if (registerType == 'email') {
      data = {
        email: getFieldsValue().email,
      }
    } else {
      data = {
        phone: getFieldsValue().phone
      }
    }
    validateFields((errors) => {
      if (errors) {
        return;
      }
      this.props.dispatch({
        type: 'login/onApply',
        payload:{
          ...data,
          password: getFieldsValue().password,
          validateCode: getFieldsValue().validateCode,
          type: getFieldsValue().type,
          note: getFieldsValue().note,
        }
      })
    })
  }

  //点击登录按钮
  onBackLogin = () => {
    this.props.dispatch(routerRedux.push('/login'))
  }

  //获取验证码
  onGetCode = () => {
    const { getFieldsValue } = this.props.form;
    const { registerType } = this.state;
    const _this = this;

    const value = registerType == 'email' ? getFieldsValue().email : getFieldsValue().phone;

    if (value) {
      let data = {};
      if (registerType == 'email') {
        data = {
          receiver: getFieldsValue().email,
          type: 'EmailValidate'
        }
      } else {
        data = {
          receiver: getFieldsValue().phone,
          type: 'PhoneValidate'
        }
      }

      create('/api/pub/validateCodes/send',data).then(({ code,message }) => {
        if (code === 200) {
          _this.setState({
            isShowTime: true
          })
          _this.getInter()
        } else {
          message.error(message)
        }
      })

    } else {
       message.error(`请填写${ registerType == 'email' ? '邮箱' : '手机号码'}！`)
    }
  }

  getInter = () => {
    console.log('AAA');
    const _this = this;
    let setInter = window.setInterval(function() {
      var time = document.getElementById("time");
      console.log('BBB');
      if (time.innerHTML == 0){
        _this.setState({
          isShowTime: false
        })
        window.clearInterval(setInter)
      } else {
        time.innerHTML -= 1;
      }
    },1000)
  }

  onChangeType = (e) => {
    const { setFieldsValue } = this.props.form;
    this.setState({
      isShowTime: false
    })
    window.clearInterval()
    this.setState({
      registerType: e.target.value,
      password: '',
      passwordAgain: '',
      code: ''
    })
    setFieldsValue({['password']: ''})
    setFieldsValue({['passwordAgain']: ''})
    setFieldsValue({['emailValidateCode']: ''})
  }

  handleConfirmPassword = (rule, value, callback) => {
    const { getFieldValue } = this.props.form
    if (value && value !== getFieldValue('password')) {
        callback('两次输入不一致！')
    }
    callback()
  }

  onClickMore = () => {
    window.location.href = '#' + '/apply'
  }

  onView = () => {
    window.location.href = '#' + '/apply-result'
  }

  render() {

    const { password,registerType } = this.state;
    const { getFieldDecorator } = this.props.form;
    const { isShowTime } = this.state;


    const registerTypeList = [
      {
        title: '邮箱申请',
        value:'email'
      },
      {
        title: '手机申请',
        value: 'phone'
      }
    ]

    const typeList = [
      {
        title: '子系统持有者',
        value: 'SUBSYS_OWNER'
      },
      {
        title: '模块持有者',
        value: 'MODULE_OWNER'
      },
      {
        title: '系统代理',
        value: 'AGENT'
      },
    ]

    return (
      <Form>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div>申请角色</div>
              <div>已有账号？<span onClick={() => this.onBackLogin()}>登录</span></div>
            </div>

            <FormItem style={{width:'70%',marginTop:'0.5em'}}>
              <Radio.Group value={registerType} buttonStyle="solid" style={{ width:'100%',display:'flex'}}
                onChange={(e) => this.onChangeType(e)}
              >
                {
                  registerTypeList.map((item,index) => (
                    <Radio.Button key={index} value={item.value} style={{width: '50%',height:'40px',textAlign:'center' }}>
                      <span style={{marginTop:'0.4em',display:'inline-block'}}>{item.title}</span>
                    </Radio.Button>
                  ))
                }
              </Radio.Group>
            </FormItem>

            <FormItem style={{width:'70%',height:'40px',marginBottom:'24px'}}>
              {getFieldDecorator('type', {
                rules: [
                  {
                    required: true,
                    message: '请选择角色',
                  }
                ]
              })(
                <Select placeholder='选择申请角色' className={styles.selectStyle}>
                  {
                    typeList.map((item,index) => (
                      <Select.Option key={index} value={item.value}>{item.title}</Select.Option>
                    ))
                  }
                </Select>
              )}
            </FormItem>

            {
              registerType == 'email' ?
              <FormItem style={{width:'70%',marginTop:'0.5em'}}>
                {getFieldDecorator('email', {
                  rules: [
                    {
                      required: true,
                      message: '请填写邮箱！',
                    },
                    {
                      type:'email',
                      message:'请填写正确的邮箱！'
                    }
                  ],
                })(
                  <Input style={{height:'40px',fontSize:'16px'}}
                   type='email'
                   placeholder='邮箱'
                  />
                )}
              </FormItem>
              :
              <FormItem style={{width:'70%',marginTop:'0.5em'}}>
                {getFieldDecorator('phone', {
                  rules: [
                    {
                      required: true,
                      message: '请填写手机号码！',
                    },
                    {
                      pattern: '^(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57])[0-9]{8}$',
                      message: '请填写正确的手机号码！'
                    }
                  ],
                })(
                  <Input style={{height:'40px',fontSize:'16px'}}
                   placeholder='手机号码'
                  />
                )}
              </FormItem>
            }

            <FormItem style={{width:'70%',marginTop:'0.5em'}}>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请填写密码！',
                  },
                  {
                    min:6,
                    message: '密码长度不能少于6位！'
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
              password ?
              <FormItem style={{width:'70%',marginTop:'0.5em'}}>
                {getFieldDecorator('passwordAgain', {
                  rules: [
                    {
                      required: true,
                      message: '请填写密码！',
                    },
                    {
                      validator:this.handleConfirmPassword
                    }
                  ],
                })(
                  <Input style={{height:'40px',fontSize:'16px'}}
                   onChange={(e) => this.setState({ passwordAgain: e.target.value })}
                   type='password'
                   placeholder='再次确认密码'
                  />
                )}
              </FormItem>
              :
              ''
            }

            <FormItem style={{width:'70%',marginTop:'0.5em'}}>
              {getFieldDecorator('note', {
                rules: [
                  {
                    required: false,
                    message: '申请原因！',
                  }
                ],
              })(
                <TextArea rows={2} style={{fontSize:'16px'}}
                 placeholder='申请原因'
                />
              )}
            </FormItem>

            <FormItem style={{width:'70%',marginTop:'0.5em'}}>
              {getFieldDecorator('validateCode', {
                rules: [
                  {
                    required: true,
                    message: '请填写验证码！',
                  }
                ],
              })(
                <div style={{ display: 'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <Input style={{height:'40px',fontSize:'16px',width:'200px'}}
                    onChange={(e) => this.setState({ code: e.target.value })}
                    value={this.state.code}
                    placeholder='请填写验证码'
                  />
                  {
                    !isShowTime ?
                    <Button style={{height:'40px'}} onClick={() => this.onGetCode()}>
                      <span id='time' style={{display:'none'}}></span>点我获取验证码
                    </Button>
                    :
                    <Button style={{height:'40px'}}><span id='time'>60</span>s后可重新获取</Button>
                  }
                </div>
              )}
            </FormItem>
            <div className={styles.applyedBut}
             style={{ marginTop: password ? '0' : '1.5em'}}
            >已申请？<span onClick={() => this.onView()}>查看申请结果</span></div>
            <div className={styles.login} onClick={() => this.onApplyOk()}
              style={{ marginTop: password ? '0.5em' : '2em'}}
            >
              提交
            </div>
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

const ApplyForm = Form.create()(Apply)

export default connect(mapStateToProps)(ApplyForm)
