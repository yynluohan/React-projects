import React from 'react';
import { connect } from 'dva';
import FormIemView from '../../common/FormIemView';

class ContracTypeView extends React.Component {

  render() {

    const { item } = this.props.contract;

    const formIemViewProps = {
      title: '合约类型详情',
      list: [
        {label:'名称',data:item.name},
        {label:'备注',data:item.note}
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
    contract: state.contract
  }
}

export default connect(mapStateToProps)(ContracTypeView);
