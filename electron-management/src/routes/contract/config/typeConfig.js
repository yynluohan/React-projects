export default {
  layout: 'Content',
  title: '合约类型',
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
        // scroll:{x:2750},
        API: {
          listAPI: '/api/crud/contract/contractPlan/types',
          deleteAPI:'/api/crud/contract/contractPlan/types/(id)'
        },
        actions:[
          {
            title: '添加',type:'modal',
            options:{
              modalTitle:'添加合约类型',
              modalWidth:900,
              items:[
                {
                  layout: 'BaseFormLayout',
                  component: 'BaseForm',
                  config: {
                    API:{
                      createAPI:'/api/crud/contract/contractPlan/types'
                    },
                    fields: [
                      { field: 'name', label: '类型名称',type:'input' },
                      { field: 'note', label: '备注',type:'input' },
                    ]
                  }
                }
              ]
            }
          }
        ],
        fields: [
          { field: 'name', label: '类型名称' },
          { field: 'note',label: '备注'},
          { field:'operation'}
        ],
        operation: [
          {
            title:'查看',action:'path',
            options:{
              path:'/contract-typeView',
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
            title: '编辑', action: 'modal',
            options:{
              modalTitle:'编辑合约类型',
              modalWidth:800,
              layout: 'Empty',
              items:[
                {
                  layout: 'BaseFormLayout',
                  component: 'BaseForm',
                  config: {
                    API: {
                      getAPI:'/api/crud/contract/contractPlan/types/(id)',
                      updateAPI: '/api/crud/contract/contractPlan/types/(id)',
                    },
                    fields: [
                      { field: 'name', label: '类型名称',type:'input' },
                      { field: 'note', label: '备注',type:'input' },
                    ]
                  }
                }
              ]
            }
          },
          { title: '删除',action:'delete',}
        ],
      },
    },
  ]
}
