import React from 'react';
import { connect } from 'dva';
import ZEle from 'zero-element';
import roleConfig from './config/roleConfig.js';

class Role extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <ZEle namespace='sys' config={roleConfig} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sys: state.sys
  }
}

export default connect(mapStateToProps)(Role);
