import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import AddMoudleForm from './component/AddMoudleForm'

class SubMoudleManageAdd extends React.Component {

  render() {
    const _this = this

    const addMoudleFormProps = {
      title:'添加子模块',
      onBack() {
        _this.props.dispatch(routerRedux.goBack())
      },
      onSave(data) {
        _this.props.dispatch({
          type: 'resource/addModule',
          payload:data
        })
      }
    }

    return (
      <div>
        <AddMoudleForm {...addMoudleFormProps} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    resource: state.resource
  }
}

export default connect(mapStateToProps)(SubMoudleManageAdd);
