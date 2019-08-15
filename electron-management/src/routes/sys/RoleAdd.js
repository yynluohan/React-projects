import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import RoleForm from './component/RoleForm';

const RoleAdd = ({ sys,dispatch }) => {

  const { permList,item } = sys;

  const modalProps = {
    title: '添加角色',
    item,
    list:permList,
    onBack() {
      dispatch(routerRedux.goBack())
    },
    onOk(data) {
      dispatch({
        type: 'sys/addRole',
        payload:data
      })
    }
  }

  return (
    <div>
      <RoleForm {...modalProps}/>
    </div>
  )

}

function mapStateToProps(state) {
  return {
    sys: state.sys
  }
}

export default connect(mapStateToProps)(RoleAdd)
