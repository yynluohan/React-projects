import React from 'react';
import { connect } from 'dva';
import FormIemView from '../../common/FormIemView';

class ProductTypeView extends React.Component {

  render() {

    const { item } = this.props.product;

    const formIemViewProps = {
      title: '产品类型详情',
      list: [
        {label:'名称',data:item.name},
        {label:'描述',data:item.note}
      ]
    }

    return (
      <div>
        <FormIemView {...formIemViewProps}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    product: state.product
  }
}

export default connect(mapStateToProps)(ProductTypeView);
