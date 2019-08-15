
module.exports = {
  layout: 'Content',
  title: '员工管理',
  items: [
    {
      layout: 'Empty',
      component: 'BaseSearch',
      config: {
        share:'staff',
        fields: [
          { field: 'name', label: '登录名', type: 'input' },
          { field: 'name', label: '角色', type: 'input' },
          { field: 'name', label: '状态', type: 'select',
            options:[
              { label: '1',value: '1'},
              { label: '2',value:'2'},
              { label: '3',value:'3'},
            ]
          },
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'BaseList',
      config: {
        share:'staff',
        API: {
          listAPI: '/api/crud/eav/configs',
        },
        // actions: [
        //   {
        //     title: '新增', type: 'path',
        //     options: {
        //       path: '/crud/addForm',
        //     },
        //   }
        // ],
        fields: [
          { field: 'readVersion',label: '头像'},
          { field: 'meterSerialNo', label: '登录名' },
          { field: 'registerNo', label: '姓名'},
          { field: 'readDateTime', label: '状态' },
          { field:'operation'}
        ],
        operation: [
          {
            title: '编辑', action: 'path',
            options: {
              outside: true,
              path: '/crud/editForm',
            },
          },
        ]
      },
    },
  ],
};
