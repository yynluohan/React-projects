import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import ZEle from 'zero-element';
import subSysConfig from './config/subSysConfig.js';

class SubSys extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <ZEle namespace='apply' config={subSysConfig} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    apply: state.apply
  }
}

export default connect(mapStateToProps)(SubSys);
