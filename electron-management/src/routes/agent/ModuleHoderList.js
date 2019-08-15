import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import ZEle from 'zero-element';
import moduleHoderListConfig from './config/moduleHoderListConfig.js';

class ModuleHoderList extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <ZEle namespace='owner' config={moduleHoderListConfig} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    owner: state.owner
  }
}

export default connect(mapStateToProps)(ModuleHoderList);
