import React from 'react';
import { connect } from 'dva';
import FormIemView from '../../common/FormIemView';

class SubSysManageView extends React.Component {

  render() {

    const { item } = this.props.resource;


    const formIemViewProps = {
      title: '代理申请详情',
      list: [
        {label:'名称',data:item.name},
        {label:'价钱',data:item.price},
        {label:'备注',data:item.note},
        {label:'相关模块',data: item.items,
         columns:[
           {title:'名称',value:'name'},
           {title:'价格',value:'price'},
           {title:'备注',value:'note'}
         ]
       }
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

export default connect(mapStateToProps)(SubSysManageView);
