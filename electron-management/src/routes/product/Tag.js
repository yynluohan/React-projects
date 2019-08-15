import React, { useState } from 'react';
import { connect } from 'dva';
import ZEle from 'zero-element';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./Module'),
  loading: () => <span>11</span>
});

class Tag extends React.Component {

  render() {

    return (
      <LoadableComponent />
    )
  }
}


export default Tag;
