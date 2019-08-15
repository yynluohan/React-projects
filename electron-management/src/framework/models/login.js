import { query,create } from '../utils/services'
import { message,notification } from 'antd';
import { routerRedux } from 'dva/router';
import { getArgment } from '../utils/parameter';

export default {
  namespace: 'login',
  state: {
    myTaskList: [], //我的任务列表
    registeredGithubUsername: '',
    applyResultData: {}
  },


  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/register') {
          const query = getArgment(location.search)
          const registeredGithubUsername = query.registeredGithubUsername || ''
          if (registeredGithubUsername) {
            notification.warning({ message: '请先完善信息后再继续！'})
            dispatch({
              type: 'save',
              payload:{
                registeredGithubUsername
              }
            })
          }
        }
      });
    },
  },

  effects: {

    *create({ payload },{ call,put }) {
      const result = yield call(create,'/api/sys/oauth/login',{...payload});
      if (result.code == 200) {
        message.success('登录成功！')
        window.localStorage.token = result.data.accessToken;
        window.localStorage.username = payload.account;
        window.localStorage.perms = result.data.perms;
        const menuData = yield call(query,'/api/sys/users/menus');
        if (menuData.code === 200) {
          window.localStorage.menuList = JSON.stringify(menuData.data)
        } else {
          notification.error({ message: menuData.message })
        }
        setTimeout(function() {
           window.location.href = '#' + '/';
           window.location.reload()
        },50)
      } else {
        message.error(result.message)
      }
    },

    *onRegister({ payload },{ call,put,select }) {
      const { registeredGithubUsername } = yield select(({ login }) => login)
      let data = {...payload}
      if (registeredGithubUsername) {
        data.registeredGithubUsername = registeredGithubUsername
      }
      let result = '';
      if (registeredGithubUsername) {
        result = yield call(create,'/api/sys/oauth/bind',data);
      } else {
        result = yield call(create,'/api/sys/oauth/register',data);
      }
      if (result.code == 200) {
        message.success(`${registeredGithubUsername ? '绑定成功！' : '注册成功！'}`)
        setTimeout(function() {
          window.location.href = '#/login'
        },50)
      } else {
        message.error(result.message)
      }
    },

    *onApply({ payload },{ call,put,select }) {
      const result = yield call(create,'/api/pub/platform/roleApply',payload);
      if (result.code == 200) {
        message.success('申请成功，请等待审核结果')
        yield put(routerRedux.push({ pathname: '/login'}))
      } else {
        message.error(result.message)
      }
    },

    //查看申请结果
    *onGetApplyResult({ payload },{ call,put }) {
      const result = yield call(create,'/api/pub/platform/roleApply/find',payload);
      if (result.code === 200) {
        yield put({
          type: 'save',
          payload:{
            applyResultData: result.data || {}
          }
        })
      } else {
        message.error(result.message)
      }
    }

  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
