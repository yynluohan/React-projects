import { query } from '../framework/utils/services';
import { getArgment } from '../framework/utils/parameter';

export default {

  namespace: 'owner',

  state: {
    item: {}
  },

  subscriptions: {
    setup({ dispatch,history }) {
      history.listen((location) => {
        const query = getArgment(location.search);
        if (location.pathname === '/agent-detail' || location.pathname === '/subsys-detail' ||
            location.pathname === '/module-detail' || location.pathname === '/tenant-detail'
           ) {
          const obj = {
            '/agent-detail':'/api/crud/agent/agents',
            '/subsys-detail':'/api/crud/owner/subsysOwners',
            '/module-detail':'/api/crud/owner/owners',
            '/tenant-detail':'/api/crud/tenant/tenants'
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
    }
  },

  effects:{
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

}
