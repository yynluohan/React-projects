import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import FormIemView from '../../common/FormIemView';
import TableInSpin from '../../common/TableInSpin';
import CardLayout from '../../common/layout/CardLayout';

class ContractProductView extends React.Component {

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

    const formIemViewProps = {
      isHiddenBackBut: true,
      title: '合约产品详情',
      list: [
        {label:'产品类型名称',data:item.typeName},
        {label:'产品名称',data:item.name},
        {label:'价格',data:item.price},
        {label:'有效周期',data:item.period},
        {label:'单位',data:item.unit ? unitObj[item.unit] : ''},
        {label:'有效次数',data:item.enableTimes},
        {label:'是否自动续期',data:item.autoRenew != undefined ? selectObj[item.autoRenew] : ''},
        {label:'是否长期有效',data:item.longTerm != undefined ? selectObj[item.longTerm] : ''},
        {label:'是否预付',data:item.prepay != undefined ? payObj[item.prepay] : ''},
        {label:'备注',data:item.note},
        {label: '产品模块',data: item.items,
          columns:[
            {title: '子系统名称',value: 'subsysName'},
            {title: '名称',value: 'moduleName'},
            {title: '价格',value: 'price'},
            {title: '描述',value: 'note'},
          ]
        }
      ]
    }

    const tableProps = {
      list: [],
      loading: false,
      columns:[
        {
          title: '账号',
          key: 'account',
          dataIndex: 'account',
        },
        {
          title: '昵称',
          key: 'name',
          dataIndex: 'name',
        },
        {
          title: '邮箱',
          key: 'email',
          dataIndex: 'email',
        },
        {
          title: '状态',
          key: 'status',
          dataIndex: 'status',
        },
        {
          title: '注册时间',
          key: 'time',
          dataIndex: 'time',
        },
        {
          title: '签约时间',
          key: 'time1',
          dataIndex: 'time1',
        }
      ]
    }

    var list = [1, 2, 3, NaN];
    var list1 = ['name', 'age'];

    console.log(list.includes(2));  // true
    console.log(list.includes(NaN)); // true

    console.log(list.includes(5));  // false
    console.log(list1.includes('name'));  // true

    return (
      <div>
        <FormIemView {...formIemViewProps}/>
        <div style={{ padding: '0 20px'}}>
          <CardLayout title='已签约的租户'>
            <TableInSpin {...tableProps}/>
          </CardLayout>
          <div style={{textAlign:'right',margin:'2em 0'}}>
            <Button type='primary' onClick={() => window.history.go(-1)}>返回</Button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contract: state.contract
  }
}

export default connect(mapStateToProps)(ContractProductView);
