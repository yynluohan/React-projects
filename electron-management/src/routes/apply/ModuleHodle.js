import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import ZEle from 'zero-element';
import moduleHodleConfig from './config/moduleHodleConfig.js';

class ModuleHodle extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <ZEle namespace="apply" config={moduleHodleConfig} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    apply: state.apply
  }
}

export default connect(mapStateToProps)(ModuleHodle);
