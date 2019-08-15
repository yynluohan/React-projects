import React from 'react';
import { connect } from 'dva';
import ZEle from 'zero-element';
import subsysConfig from './config/subsysConfig.js';

class SubSysManage extends React.Component {

  render() {

    return (
      <div>
        <ZEle namespace='resource' config={subsysConfig} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    resource: state.resource
  }
}

export default connect(mapStateToProps)(SubSysManage);
