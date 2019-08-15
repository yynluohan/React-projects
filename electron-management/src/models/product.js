import { query } from '../framework/utils/services';
import { routerRedux } from 'dva/router';
import { getArgment } from '../framework/utils/parameter';

export default {

  namespace: 'product',

  state: {
    item: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(( location ) => {
        const query = getArgment(location.search);
        if (location.pathname === '/product-typeView') {
          const obj = {
            '/product-typeView':'',
          }
          dispatch({
            type: 'onView',
            payload:{
              id: query.id || '',
              apiUrl: obj[location.pathname]
            }
          })
        }
      })
    },
  },

  effects: {
    *onView({ payload }, { call,put }) {
      const result = yield call(query,`${payload.apiUrl}/${payload.id}`);
      if (result.code === 200) {
        yield put({
          type: 'save',
          payload:{
            item: result.data
          }
        })
      }
    }

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
