module.exports = {
  layout: 'Content',
  title: '详情',
  items: [
    {
      layout: 'Empty',
      component: 'BaseForm',
      layoutConfig:{
        onBack:() => {},
      },
      config: {
        API: {
          getAPI: '/api/crud/platform/roleApply/[id]',
          updateAPI: '/api/crud/platform/roleApply/[id]',
        },
        fields: [
          { field: 'account',label: '账户',type: 'input',span:8,disabled:true},
          { field: 'name', label: '昵称', type: 'input',span:8,disabled:true},
          { field: 'email',label: '邮箱',type: 'input',span:8,disabled:true},
          { field: 'status', label: '状态', type: 'input',span:8,disabled:true},
          { field: 'createdTime',label: '创建时间',type: 'input',span:8,disabled:true},
          { field: 'note', label: '备注', type: 'input',span:8,disabled:true},
        ]
      },
    },
  ],
};
