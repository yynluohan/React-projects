import React from 'react';
import { connect } from 'dva';
import FormIemView from '../../common/FormIemView';

class SubMoudleManageView extends React.Component {

  render() {

    const { item } = this.props.resource;


    const formIemViewProps = {
      title: '代理申请详情',
      list: [
        {label:'系统名称',data: item.subsysName},
        {label:'模块名称',data:item.name},
        {label:'价钱',data:item.price},
        {label:'备注',data:item.note},
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
    resource: state.resource
  }
}

export default connect(mapStateToProps)(SubMoudleManageView);
