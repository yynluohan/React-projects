import React from 'react';
import { connect } from 'dva';
import SysSysForm from './component/SysSysForm';


class SubSysManageAdd extends React.Component {

  render() {

    const { item } = this.props.resource

    const _this = this

    const formProps = {
      item,
      title: '修改子系统',
      onSave(data){
        _this.props.dispatch({
          type: 'resource/updateSubSys',
          payload:data
        })
      },
      onBack:() => window.history.go(-1)
    }

    return (
      <div>
        <SysSysForm {...formProps}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    resource: state.resource
  }
}

export default connect(mapStateToProps)(SubSysManageAdd);
