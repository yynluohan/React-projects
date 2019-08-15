export default {
  layout: 'Content',
  title: '合约产品',
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
          { field: 'name',label: '名称',type:'input'},
        ]
      },
    },
    {
      span: 24,
      layout:'Empty',
      component: 'BaseList',
      config: {
        share:'contractType',
        // props: { scroll: { x: 1500 } },
        API: {
          listAPI: '/api/pub/tenant/contract/plan',
          deleteAPI:'/api/crud/tenant/contract/plan/(id)'
        },
        actions:[
          {
            title: '添加',type:'path',
            options:{
              path: '/contract-productAdd'
            }
          }
        ],
        fields: [
          { field: 'name', label: '产品名称',width:150},
          { field: 'typeName', label: '合约类型名称',width:150},
          { field: 'planNumber', label: '产品编号',width:200},
          { field: 'price', label: '价格',width:100},
          // { field: 'period', label: '有效周期',width:100},
          // { field: 'unit', label: '单位',valueType: 'status',width:100,
          //   options:{
          //     statusMap:{
          //       'YEAR':'年',
          //       'MONTH':'月',
          //       'DAY':'日',
          //       'HOUR':'时',
          //       'MINUTE': '分',
          //       'TIMES': '次'
          //     }
          //   }
          // },
          // { field: 'autoRenew', label: '是否自动续约',valueType: 'status',width:100,
          //   options: {
          //     statusMap: {
          //       0: '否',
          //       1: '是'
          //     }
          //   }
          // },
          // { field: 'longTerm', label: '是否长期有效',valueType: 'status',width:100,
          //   options: {
          //     statusMap: {
          //       0: '否',
          //       1: '是'
          //     }
          //   }
          // },
          // { field: 'enableTimes', label: '有效次数',width:100},
          // { field: 'prepay', label: '是否预付',valueType: 'status',width:100,
          //     options: {
          //       statusMap: {
          //         0: '非预付',
          //         1: '付款'
          //       }
          //     }
          // },
          // { field: 'note', label: '备注',width:150},
          { field:'operation',width:150}
        ],
        operation: [
          {
            title:'查看',action:'path',
            options:{
              path:'/contract-productView',
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
              path: '/contract-productEdit',
              queryData:(records) => {
                const data = {
                  id:records.id,
                }
                return data
              }
            }
          },
          { title: '删除',action:'delete',}
        ],
      },
    },
  ]
}
