import React from 'react';
import { connect } from 'dva';
import ZEle from 'zero-element';
import submouleConfig from './config/submouleConfig.js';

class SubMouleManage extends React.Component {

  render() {

    return (
      <div>
        <ZEle namespace='resource' config={submouleConfig} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    resource: state.resource
  }
}

export default connect(mapStateToProps)(SubMouleManage);
