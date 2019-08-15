module.exports = {
  layout: 'Content',
  title: '添加子系统',
  items: [
    {
      layout: 'Empty',
      component: 'BaseForm',
      config: {
        path:'/subsysManage',
        API:{
          createAPI:'/api/crud/subsys/subsyses'
        },
        fields: [
          { field: 'name', label: '名称', type: 'input' },
          { field: 'price', label: '价格', type: 'input' },
          { field: 'note', label: '备注', type: 'input' },
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'BaseChildren',
      config: {
        itemsField: 'items',
        actions: [
          {
            title: '添加子模块', type: 'children-modal', options: {
              modalTitle: '添加子系统模块',
              modalWidth: 800,
              items: [
                {
                  layout: 'Empty',
                  component: 'ChildrenForm',
                  config: {
                    fields: [
                      { field: 'name', label: '名称', type: 'input' },
                      { field: 'price', label: '价格', type: 'input'},
                      { field: 'note', label: '备注', type: 'input' },
                    ],
                  },
                }
              ],
            }
          },
        ],
        fields: [
          { field: 'name', label: '名称', type: 'input' },
          { field: 'price', label: '价格', type: 'input'},
          { field: 'note', label: '备注', type: 'input' },
        ],
        operation: [
          {
            title: '编辑', action: 'modal',
            options: {
              outside: true,
              modalTitle: '编辑字段',
              layout: 'Content',
              items: [
                {
                  layout: 'Empty',
                  component: 'ChildrenForm',
                  config: {
                    fields: [
                      { field: 'name', label: '名称', type: 'input' },
                      { field: 'price', label: '价格', type: 'input'},
                      { field: 'note', label: '备注', type: 'input' },
                    ],
                  },
                },
              ],
            }
          },
          {
            title: '移除', action: 'removeChild',
            options: {
              outside: true,
            }
          },
        ],
      },
    }
  ],
};
