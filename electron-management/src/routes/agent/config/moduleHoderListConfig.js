export default {
  layout: 'Content',
  title: '模块持有者列表',
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
        share:'moduleList',
        fields: [
          { field: 'invitationCode',label: '邀请码',type:'input'}
        ]
      }
    },
    {
      span: 24,
      layout:'Empty',
      component: 'BaseList',
      config: {
        share:'moduleList',
        // scroll:{x:2750},
        API: {
          listAPI: '/api/crud/owner/owners',
        },
        fields: [
          { field: 'invitationCode',label: '邀请码'},
          { field: 'leftNum', label: 'leftNum' },
          { field: 'rightNum',label: 'rightNum'},
          { field:'operation'}
        ],
        operation: [
          {
            title:'查看',action:'path',
            options:{
              path:'/module-detail',
              // permission:'apply.view',
              // location:true
              queryData:(records) => {
                const data = {
                  id:records.id,
                }
                return data
              }
            }
          }
        ],
      },
    },
  ]
}
