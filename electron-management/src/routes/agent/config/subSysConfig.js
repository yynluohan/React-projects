export default {
  layout: 'Content',
  title: '子系统列表',
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
        share:'subsysList',
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
        share:'subsysList',
        // scroll:{x:2750},
        API: {
          listAPI: '/api/crud/owner/subsysOwners',
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
              path:'/subsys-detail',
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
