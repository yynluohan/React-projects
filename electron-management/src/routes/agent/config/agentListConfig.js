export default {
  layout: 'Content',
  title: '代理列表',
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
        share:'agentList',
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
        share:'agentList',
        // scroll:{x:2750},
        API: {
          listAPI: '/api/crud/agent/agents',
        },
        fields: [
          { field: 'invitationCode',label: '邀请码'},
          { field: 'leftNum', label: 'leftNum' },
          { field: 'rightNum',label: 'rightNum'},
          { field: 'tenantInvitationCode',label: '租户邀请码'},
          { field:'operation'}
        ],
        operation: [
          {
            title:'查看',action:'path',
            options:{
              path:'/agent-detail',
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
