import React from 'react';
import { connect } from 'dva';
import ZEle from 'zero-element';
import productType from './config/productType.js';

class ProductType extends React.Component {

  render() {

    return (
      <div>
        <ZEle namespace='product' config={productType} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    product: state.product
  }
}

export default connect(mapStateToProps)(ProductType);
