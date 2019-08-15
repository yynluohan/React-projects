import { query } from '../framework/utils/services';
import { getArgment } from '../framework/utils/parameter';

export default {

  namespace: 'apply',

  state: {
    item: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(( location ) => {
        const query = getArgment(location.search)
        if (location.pathname == '/subSysApply-view' || location.pathname === '/moduleHoder-view'
            || location.pathname === '/agent-view'
          ) {
          dispatch({
            type: 'onView',
            payload: {
              id: query.id || ''
            }
          })
        }
      })
    },
  },

  effects: {
    *onView({ payload }, { call, put }) {  // eslint-disable-line
      const result = yield call(query,`/api/crud/platform/roleApply/${payload.id}`);
      if (result.code === 200) {
        yield put({
          type: 'save',
          payload:{
            item: result.data
          }
        })
      } 
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
