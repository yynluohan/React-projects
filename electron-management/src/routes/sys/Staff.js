import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import ZEle from 'zero-element';
import staffConfig from './config/staffConfig.js';

class Staff extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div style={{ height: '800px'}}>
        {/*<ZEle namespace='sys' config={staffConfig} />*/}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sys: state.sys
  }
}

export default connect(mapStateToProps)(Staff);
