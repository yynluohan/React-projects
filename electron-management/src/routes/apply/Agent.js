import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import ZEle from 'zero-element';
import agentCoinfig from './config/agentCoinfig.js';

class Agent extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <ZEle namespace='apply' config={agentCoinfig} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    apply: state.apply
  }
}

export default connect(mapStateToProps)(Agent);
