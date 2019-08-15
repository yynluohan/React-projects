import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import AddMoudleForm from './component/AddMoudleForm'

class SubMoudleManageEdit extends React.Component {

  render() {
    const { item } = this.props.resource;
    const _this = this

    const addMoudleFormProps = {
      item,
      title:'修改子模块',
      onBack() {
        _this.props.dispatch(routerRedux.goBack())
      },
      onSave(data) {
        _this.props.dispatch({
          type: 'resource/updateModule',
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

export default connect(mapStateToProps)(SubMoudleManageEdit);
