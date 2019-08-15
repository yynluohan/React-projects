import React from 'react';
import { connect } from 'dva';
import FormIemView from '../../common/FormIemView';

class ModuleHodleView extends React.Component {

  render() {

    const { item } = this.props.apply;

    const statusMap = {
      'PENDING': '待审核',
      'APPROVED': '通过',
      'APPROVE_FAIL': '未通过',
      'CLOSED': '关闭',
      '': ''
    }

    const formIemViewProps = {
      title: '模块持有者申请详情',
      list: [
        {label:'账户',data:item.account},
        {label:'昵称',data:item.name},
        {label:'邮箱',data:item.email},
        {label:'状态',data:statusMap[item.status]},
        {label:'创建时间',data:item.createdTime},
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
    apply: state.apply
  }
}

export default connect(mapStateToProps)(ModuleHodleView);
