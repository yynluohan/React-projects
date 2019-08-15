import { query } from '../framework/utils/services';
import { routerRedux,notification } from 'dva/router';
import { getArgment } from '../framework/utils/parameter';


export default {

  namespace: 'indexPage',

  state: {
    name:'这个一个模版'
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(( location ) => {
        if (location.pathname === '/') {
          const query = getArgment(location.search);
          if (query.accessToken) {
            window.localStorage.token = query.accessToken;
          }
          if (!window.localStorage.token && !query.accessToken) {
            console.log('LLLLLL');
            dispatch(routerRedux.push('/login'))
            return;
          }
          // dispatch({
          //   type: 'fetch'
          // })
        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const menuData = yield call(query,'/api/menu/menus/group');
      if (menuData.code === 200) {
        window.localStorage.menuList = JSON.stringify(menuData.data)
      } else {
        console.log('KKKKKKKKKKKKK ',menuData);
        notification.error({ message: menuData.message })
      }
    }

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
