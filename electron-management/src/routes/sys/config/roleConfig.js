
module.exports = {
  layout: 'Content',
  title: '角色管理',
  items: [
    {
      layout: 'Empty',
      component: 'BaseSearch',
      config: {
        share:'role',
        fields: [
          { field: 'name', label: '角色名', type: 'input' },
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'BaseList',
      config: {
        share:'role',
        API: {
          listAPI: '/api/adm/roles',
          deleteAPI: '/api/adm/roles/(id)/(version)'
        },
        actions:[
          {
            title: '添加',type:'path',
            options:{
              path: '/role-add'
            }
          }
        ],

        fields: [
          { field: 'name',label: '角色名'},
          { field: 'tips', label: '描述' },
          { field:'operation'}
        ],
        operation: [
          {
            title: '编辑', action: 'path',
            options: {
              outside: true,
              path: '/role-edit',
              queryData:(records) => {
                const data = {
                  id:records.id,
                }
                return data
              }
            },
          },
          { title: '删除', action: 'delete' }
        ]
      },
    },
  ],
};
