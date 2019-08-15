import React from 'react';
import { connect } from 'dva';
import MenuAdd from './component/MenuAdd';

const Menu = ({ sys,dispatch }) => {

  const { menuList,menuChild } = sys;

  const menuAddProps = {
    list:menuList,
    menuChild,
    onAddMenu(data) {
      dispatch({
        type: `sys/${!data.id ? 'addMenu' : 'updateMenu'}`,
        payload:{
          ...data,
        }
      })
    },
    onQueryChild(id) {
      dispatch({
        type: 'sys/getMenuChild',
        payload:id
      })
    },
    onDelete(data) {
      dispatch({
        type: 'sys/deleteChild',
        payload:data
      })
    }
  }

  return (
    <div>
      <MenuAdd {...menuAddProps}/>
    </div>
  )

}

function mapStateToProps(state) {
  return {
    sys: state.sys
  }
}

export default connect(mapStateToProps)(Menu)
