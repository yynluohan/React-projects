export default {
  layout: 'Content',
  title: '子系统申请列表',
  items: [
    {
      span: 24,
      layout:'Empty',
      component: 'BaseSearch',
      config: {
        share:'subSys',
        fields: [
          { field: 'status',label: '状态',type:'select',
            options:[
              { label: '待审核',value:'PENDING' },
              { label: '通过',value:'APPROVED' },
              { label: '未通过',value:'APPROVE_FAIL' },
              { label: '关闭',value:'CLOSED' },
            ]
          },
          // { field:'startTime',label: '开始时间',type:'date'},
          // { field:'endTime',label: '结束时间',type:'date'},
        ]
      },
    },
    {
      span: 24,
      layout:'Empty',
      component: 'BaseList',
      config: {
        share:'subSys',
        // scroll:{x:2750},
        API: {
          // list 列表，通过  type 去筛选是那种角色，通过 状态去筛选对应状态的记录，创建时间去筛选
          // status=xxx&createTime=xx
          listAPI: '/api/crud/platform/roleApply?type=SUBSYS_OWNER',
        },
        fields: [
          { field: 'account',label: '账户'},
          { field: 'name', label: '昵称' },
          { field: 'email',label: '邮箱'},
          { field: 'status',label: '状态',valueType:'status',
            options:{
              statusMap:{
                'PENDING':'待审核',
                'APPROVED':'通过',
                'APPROVE_FAIL':'未通过',
                'CLOSED':'关闭'
              }
            }
          },
          { field: 'createdTime',label: '创建时间'},
          { field:'operation'}
        ],
        operation: [
          {
            title:'查看',action:'path',
            options:{
              path:'/subSysApply-view',
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
            title: '通过',action:'request',
            options:{
              API:'/api/crud/platform/roleApply/(id)/pass',
              method:'post'
            }
          },
          { title: '拒绝',action:'request',
            options:{
              API:'/api/crud/platform/roleApply/(id)/reject',
              method:'post'
            }
          },
          { title: '关闭',action:'request',
            options:{
              API:'/api/crud/platform/roleApply/(id)/close',
              method:'post'
            }
          }
        ],
      },
    },
  ]
}
