export default {
  layout: 'Content',
  title: '子模块管理列表',
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
        share:'subSysManage',
        fields: [
          { field: 'name',label: '名称',type:'input'}
        ]
      }
    },
    {
      span: 24,
      layout:'Empty',
      component: 'BaseList',
      config: {
        share:'subSysManage',
        // scroll:{x:2750},
        API: {
          listAPI: '/api/crud/subsys/modules',
          deleteAPI: '/api/crud/subsys/modules/(id)'
        },
        actions:[
          {
            title: '添加',type:'path',
            options:{
              path:'/submoduleManage-add'
            }
          }
        ],
        fields: [
          { field: 'name',label: '名称'},
          { field: 'price', label: '价格' },
          { field: 'note',label: '描述'},
          { field:'operation'}
        ],
        operation: [
          {
            title:'查看',action:'path',
            options:{
              path:'/submoduleManage-view',
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
            title:'编辑',action:'path',
            options:{
              path:'/submoduleManage-edit',
              queryData:(records) => {
                const data = {
                  id:records.id,
                }
                return data
              }
            }
          },
          {
            title: '删除',action: 'delete',
          }
        ],
      },
    },
  ]
}
