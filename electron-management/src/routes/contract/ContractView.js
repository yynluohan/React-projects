import React from 'react';
import { connect } from 'dva';
import FormIemView from '../../common/FormIemView';

class ContractView extends React.Component {

  render() {

    const { item } = this.props.contract;

    const unitObj = {
      'YEAR':'年',
      'MONTH':'月',
      'DAY':'日',
      'HOUR':'时',
      'MINUTE': '分',
      'TIMES': '次',
    }

    const selectObj = {
      0: '否',
      1: '是'
    }

    const payObj = {
      0: '非预付',
      1: '付款'
    }

    const effctObj = {
      0: '无效',
      1: '有效'
    }

    const statusObj = {
      'UNPAID':'未付款',
      'PAID': '已付款',
      'CLOSED': '已关闭'
    }

    const formIemViewProps = {
      title: '合约详情',
      list: [
        {label:'合约编号',data:item.contractNumber},
        {label:'用户账号',data:item.userAccount},
        {label:'用户邮箱',data:item.userEmail},
        {label:'用户手机号',data:item.userPhone},
        {label:'创建时间',data:item.createdTime},
        {label:'开始时间',data:item.startTime},
        {label:'结束时间',data:item.closeTime},
        {label:'隐秘价格',data:item.privatePrice},
        {label:'价格',data:item.price},
        {label:'折扣',data:item.totalPpd},
        {label:'最终价格',data:item.price - item.totalPpd},
        {label:'剩余有效次数',data:item.enableTerm},
        {label:'是否自动续约',data:item.autoRenew != undefined ? selectObj[item.autoRenew] : ''},
        {label:'是否长期有效',data:item.longTerm != undefined ? selectObj[item.longTerm] : ''},
        {label:'是否预付',data:item.prepay != undefined ? payObj[item.prepay] : ''},
        {label:'是否有效',data:item.invalid != undefined ? effctObj[item.invalid] : ''},
        {label:'校验者',data:item.verifier},
        {label:'状态',data:item.status != undefined ? statusObj[item.status] : ''},
        {label: '产品模块',data: item.items,
          columns:[
            {title: '子系统名称',value: 'subsysName'},
            {title: '名称',value: 'moduleName'},
            {title: '价格',value: 'price'},
            {title: '折扣',value: 'totalPpd'},
            {title: '最终价格',value: 'finalPrice'},
            {title: '描述',value: 'moduleNote'},
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
    contract: state.contract
  }
}

export default connect(mapStateToProps)(ContractView);
