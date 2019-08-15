import { query,create,update,remove } from '../framework/utils/services';
import { getArgment } from '../framework/utils/parameter';
import { notification } from 'antd';
import { routerRedux } from 'dva/router';

export default {

  namespace:'sys',

  state:{
    item: {},
    permList: [],
    id:'',
    menuList: [],
    menuChild: []
  },

  subscriptions:{
    setup({ dispatch,history }) {
      history.listen((location) => {
        const query = getArgment(location.search);
        if (location.pathname === '/role-edit') {
          dispatch({
            type: 'save',
            payload:{
              id: query.id
            }
          })
          dispatch({
            type: 'onGetPermGroup'
          })
          dispatch({
            type: 'onView',
            payload:{
              id: query.id || ''
            }
          })
        }

        if (location.pathname === '/role-add') {
          dispatch({
            type: 'onGetPermGroup'
          })
        }

        if (location.pathname === '/menu') {
          dispatch({
            type: 'getMenu'
          })
        }
      })
    }
  },

  effects : {
    *onView({ payload },{ call,put }) {
      const result = yield call(query,`/api/adm/roles/${payload.id}`);
      if (result.code === 200) {
        yield put({
          type:'save',
          payload:{
            item: result.data,
          }
        })
      }
    },

    *onGetPermGroup({ payload },{ call,put }) {
      const result = yield call(query,'/api/adm/perms/group_by');
      if (result.code === 200) {
        yield put({
          type: 'save',
          payload:{
            permList: result.data.items.length > 0 && result.data.items[0].items
          }
        })
      }
    },

    //添加角色
    *addRole({ payload },{ call,put }) {
      const result = yield call(create,'/api/adm/roles',payload);
      if (result.code === 200) {
        notification.success({ message: '添加成功！'})
        yield put(routerRedux.goBack())
      }
    },

    //更新角色
    *updateRole({ payload },{ call,put,select }) {
      const { id } = yield select(({ sys }) => sys);
      const result = yield call(update,`/api/adm/roles/${id}`,payload)
      if (result.code == 200) {
        notification.success({ message: '更新成功！'})
        yield put(routerRedux.goBack())
      } else {
        notification.error({ message: result.message})
      }
    },

    *getMenu({ payload },{ call,put }) {
      const result = yield call(query,'/api/menu/menus/group');
      if (result.code === 200) {
        yield put({
          type: 'save',
          payload:{
            menuList: result.data,
          }
        })
      }
    },

    *getMenuChild({ payload },{ call,put }) {
      const result = yield call(query,`/api/menu/menus`,{pid: payload});
      if (result.code === 200) {
        yield put({
          type: 'save',
          payload:{
            menuChild: result.data.records,
          }
        })
      }
    },

    *addMenu({ payload },{ call,put }){
      const url = `/api/menu/menus/parent/${payload.pid}`
      delete payload.pid;
      const result = yield call(create,url,{...payload});
      if (result.code === 200) {
        notification.success({ message: '添加成功！'})
        yield put({ type: 'getMenu' })
      } else {
        notification.success({ message: result.message})
      }
    },

    *updateMenu({ payload },{ call,put }){
      const url = `/api/menu/menus/${payload.id}`
      const result = yield call(update,url,{...payload});
      if (result.code === 200) {
        notification.success({ message: '更新成功！'})
        yield put({
          type: 'getMenuChild',
          payload: payload.pid
        })
      } else {
        notification.success({ message: result.message})
      }
    },

    *deleteChild({ payload },{ call,put }){
      const result = yield call(remove,`/api/menu/menus/${payload.id}`);
      if (result.code === 200) {
        notification.success({ message: '删除成功！'})
        yield put({
          type: 'getMenuChild',
          payload: payload.pid
        })
      } else {
        notification.success({ message: result.message})
      }
    }

  },

  reducers: {
    save(state,action) {
      return { ...state,...action.payload }
    }
  }
}
