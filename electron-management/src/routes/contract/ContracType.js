import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import ZEle from 'zero-element';
import typeConfig from './config/typeConfig.js';

class ContracType extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <ZEle namespace='contract' config={typeConfig} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contract: state.contract
  }
}

export default connect(mapStateToProps)(ContracType);
