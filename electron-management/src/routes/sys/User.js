import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import ZEle from 'zero-element';
import userConfig from './config/userConfig.js';

class User extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <ZEle namespace='sys' config={userConfig} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sys: state.sys
  }
}

export default connect(mapStateToProps)(User);
