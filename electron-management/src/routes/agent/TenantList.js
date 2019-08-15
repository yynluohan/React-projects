import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import ZEle from 'zero-element';
import tenantListConfig from './config/tenantListConfig.js';

class TenantList extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <ZEle namespace='owner' config={tenantListConfig} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    owner: state.owner
  }
}

export default connect(mapStateToProps)(TenantList);
