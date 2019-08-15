export default {
  layout: 'Content',
  title: '合约列表',
  items: [
    {
      span: 24,
      layout:'Empty',
      layoutConfig:{
        title: 'search',
        rightIcon:false,
        typeList:['General']
      },
      component: 'BaseSearch',
      config: {
        share:'contractType',
        fields: [
          { field: 'contractNumber',label: '合约编号',type:'input'},
        ]
      },
    },
    {
      span: 24,
      layout:'Empty',
      component: 'BaseList',
      config: {
        share:'contractType',
        // props: { scroll: { x: 2300 } },
        API: {
          listAPI: '/api/crud/tenant/contract',
          deleteAPI:'/api/crud/tenant/contract/(id)'
        },
        actions:[
          {
            title: '添加',type:'path',
            options:{
              path: '/contract-listAdd'
            }
          }
        ],
        fields: [
          { field: 'contractNumber', label: '合约编号',width:200 },
          { field: 'userAccount',label: '用户账户',width:150 },
          { field: 'userEmail',label: '用户邮箱',width:200 },
          { field: 'userPhone',label: '用户手机号',width:150 },
          { field: 'createdTime',label: '创建时间',width:150 },
          // { field: 'startTime', label: '开始时间',width:150 },
          // { field: 'closeTime',label: '结束时间',width:150 },
          { field: 'status',label: '状态',valueType:'status',width:100,
            options:{
              statusMap:{
                'UNPAID':'未付款',
                'PAID': '已付款',
                'CLOSED': '已关闭'
              }
            }
          },
          // { field: 'privatePrice', label: '隐秘价格',width:100 },
          { field: 'price',label: '价格',width:100},
          // { field: 'totalPpd', label: '总折扣',width:100 },
          // { field: 'finalPrice',label: '最终价格',width:100 },
          // { field: 'longTerm', label: '是否长期有效',valueType:'status',width:100,
          //   options: {
          //     statusMap:{
          //       0: '否',
          //       1: '是'
          //     }
          //   }
          // },
          // { field: 'enableTerm',label: '剩余有效次数',width:100},

          // { field: 'autoRenew',label: '是否自动续约',valueType:'status',width:100,
          //   options: {
          //     statusMap:{
          //       0: '否',
          //       1: '是'
          //     }
          //   }
          // },
          { field: 'verifier',label: '校对者',width:150},
          // { field: 'prepay',label: '是否预付',valueType:'status',width:100,
          //   options: {
          //     statusMap: {
          //       0: '非预付',
          //       1: '付款'
          //     }
          //   }
          // },
          // { field: 'invalid',label: '是否有效',valueType:'status',width:100,
          //   options: {
          //     statusMap: {
          //       0: '有效',
          //       1: '无效'
          //     }
          //   }
          // },
          { field:'operation',width:100}
        ],
        operation: [
          {
            title:'查看',action:'path',
            options:{
              path:'/contract-listView',
              // permission:'apply.view',
              // location:true
              queryData:(records) => {
                const data = {
                  id:records.id,
                }
                return data
              }
            }
          },
          {
            title: '编辑', action: 'path',
            options:{
              path: '/contract-listEdit'
            }
          },
          { title: '已支付',action:'request',
            options:{
              API:'/api/crud/tenant/contract/(id)/paid',
              method:'post'
            }
          },
          { title: '关闭',action:'request',
            options:{
              API:'/api/crud/tenant/contract/(id)/close',
              method:'post'
            }
          },
          { title: '删除',action:'delete',}
        ],
      },
    },
  ]
}
