import { query,create,update } from '../framework/utils/services';
import { routerRedux } from 'dva/router';
import { notification } from 'antd';
import { getArgment } from '../framework/utils/parameter';

export default {

  namespace: 'contract',

  state: {
    item:{},
    id: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(( location ) => {
        const query = getArgment(location.search);
        if (location.pathname === '/contract-typeView' || location.pathname === '/contract-productEdit'
            || location.pathname === '/contract-productView' || location.pathname === '/contract-listEdit'
            || location.pathname === '/contract-listView'
           ) {
          const obj = {
            '/contract-typeView':`/api/crud/contract/contractPlan/types/${query.id}`,
            '/contract-productEdit': `/api/pub/tenant/contract/plan/${query.id}/details`,
            '/contract-productView': `/api/pub/tenant/contract/plan/${query.id}/details`,
            '/contract-listEdit':`/api/crud/tenant/contract/${query.id}/details`,
            '/contract-listView': `/api/crud/tenant/contract/${query.id}/details`,
          }
          dispatch({
            type: 'save',
            payload:{
              id: query.id || ''
            }
          })
          dispatch({
            type: 'onView',
            payload:{
              apiUrl: obj[location.pathname]
            }
          })
        }
      })
    },
  },

  effects: {
    *onView({ payload }, { call, put }) {  // eslint-disable-line
      const result = yield call(query,payload.apiUrl);
      if (result.code === 200) {
        yield put({
          type:'save',
          payload:{
            item: result.data
          }
        })
      }
    },

    //添加合约产品
    *addContractProduct({ payload },{ call,put }) {
      const result = yield call(create,'/api/crud/tenant/contract/plan',payload);
      if (result.code === 200) {
        notification.success({ message: '添加成功！'})
        yield put(routerRedux.goBack())
      } else {
        notification.error({ message: result.message})
      }
    },

    //修改合约产品
    *updateContractProduct({ payload },{ call,put,select }){
      const { id } = yield select(({ contract }) => contract);
      const result = yield call(update,`/api/crud/tenant/contract/plan/${id}`,payload);
      if (result.code === 200) {
        notification.success({ message: '更新成功！'})
        yield put(routerRedux.goBack())
      } else {
        notification.error({ message: result.message})
      }
    },

    //添加合约
    *addContract({ payload },{ call,put }) {
      const result = yield call(create,'/api/crud/tenant/contract',payload);
      if (result.code === 200) {
        notification.success({ message: '添加成功！'})
        yield put(routerRedux.goBack())
      } else {
        notification.error({ message: result.message})
      }
    },

    //修改合约
    *updateContract({ payload },{ call,put,select }) {
      const { id } = yield select(({ contract }) => contract);
      const result = yield call(update,`/api/crud/tenant/contract/${id}`,payload);
      if (result.code === 200) {
        notification.success({ message: '更新成功！'})
        yield put(routerRedux.goBack())
      } else {
        notification.error({ message: result.message})
      }
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
