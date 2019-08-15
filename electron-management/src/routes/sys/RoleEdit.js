import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import RoleForm from './component/RoleForm';

const RoleEdit = ({ sys,dispatch }) => {

  const { permList,item } = sys;

  const modalProps = {
    title: '编辑角色',
    item,
    list:permList,
    onBack() {
      dispatch(routerRedux.goBack())
    },
    onOk(data) {
      dispatch({
        type: 'sys/updateRole',
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

export default connect(mapStateToProps)(RoleEdit)
