import React from 'react';
import { connect } from 'dva';
import ZEle from 'zero-element';
import productList from './config/productList.js';

class Product extends React.Component {

  render() {

    return (
      <div>
        <ZEle namespace='product' config={productList} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    product: state.product
  }
}

export default connect(mapStateToProps)(Product);
