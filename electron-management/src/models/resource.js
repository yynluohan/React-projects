import { query,create,update } from '../framework/utils/services';
import { getArgment } from '../framework/utils/parameter';
import { notification } from 'antd';
import { routerRedux } from 'dva/router';

export default {

  namespace: 'resource',

  state:{
    item: {},
    id: ''
  },

  subscriptions:{
    setup({ dispatch,history }) {
      history.listen((location) => {
        const query = getArgment(location.search)
        if (location.pathname === '/subsysManage-view' || location.pathname === '/subsysManage-edit'
            || location.pathname == '/submoduleManage-edit'|| location.pathname === '/submoduleManage-view') {
          const obj = {
            '/subsysManage-view': `/api/crud/subsys/subsyses/${query.id}/details`,
            '/subsysManage-edit': `/api/crud/subsys/subsyses/${query.id}/details`,
            '/submoduleManage-edit': `/api/crud/subsys/modules/${query.id}`,
            '/submoduleManage-view': `/api/crud/subsys/modules/${query.id}`,
          }
          dispatch({
            type: 'save',
            payload:{
              id: query.id
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
    }
  },

  effects: {
    *onView({ payload },{ call,put }) {
      const result = yield call(query,payload.apiUrl);
      if (result.code === 200) {
        yield put({
          type: 'save',
          payload:{
            item: result.data
          }
        })
      }
    },

    //添加子模块
    *addModule({ payload },{ call,put }){
      const result = yield call(create,'/api/crud/subsys/modules',payload);
      if (result.code === 200) {
        notification.success({ message: '添加成功！'})
        yield put(routerRedux.goBack())
      } else {
        notification.error({ message: result.message })
      }
    },

    //更新子模块
    *updateModule({ payload },{ call,put,select }){
      const { id } = yield select(({ resource }) => resource)
      const result = yield call(update,`/api/crud/subsys/modules/${id}`,payload);
      if (result.code === 200) {
        notification.success({ message: '更新成功！'})
        yield put(routerRedux.goBack())
      } else {
        notification.error({ message: result.message })
      }
    },

    *addSubSys({ payload },{ call,put,select }){
      const result = yield call(create,'/api/crud/subsys/subsyses',payload);
      if (result.code === 200) {
        notification.success({ message: '添加成功！'})
        yield put(routerRedux.goBack())
      } else {
        notification.error({ message: result.message })
      }
    },

    *updateSubSys({ payload },{ call,put,select }){
      const { id } = yield select(({ resource }) => resource)
      const result = yield call(update,`/api/crud/subsys/subsyses/${id}`,payload);
      if (result.code === 200) {
        notification.success({ message: '更新成功！'})
        yield put(routerRedux.goBack())
      } else {
        notification.error({ message: result.message })
      }
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

}
