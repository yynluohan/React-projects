import React from 'react';
import { connect } from 'dva';
import SysSysForm from './component/SysSysForm';

class SubSysManageAdd extends React.Component {

  render() {

    const _this = this

    const formProps = {
      title: '添加子系统',
      onSave(data){
        _this.props.dispatch({
          type: 'resource/addSubSys',
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
