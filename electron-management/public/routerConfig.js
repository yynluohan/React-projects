module.exports = [
  {
    name: '申请管理',
    icon: 'tag',
    items: [
      {
        url: '/subSys-apply',
        name: '子系统申请',
        icon: 'tags',
      },
      {
        url: '/moduleHolder-apply',
        name: '模块持有者',
        icon: 'tags',
      },
      {
        url: '/agent-apply',
        name: '代理',
        icon: 'tags',
      },
    ]
  },
  {
    url: '/agent',
    name: '代理',
    icon: 'tag',
  },
  {
    url: '/subSys',
    name: '子系统',
    icon: 'tag',
  },
  {
    url: '/moduleHoder',
    name: '模块持有者',
    icon: 'tag',
  },
  {
    url: '/tenant',
    name: '租户',
    icon: 'tag',
  },
  {
    name:'资源管理',
    icon:'tag',
    items:[
      {
        url:'/subsysManage',
        name: '子系统管理',
        icon: 'tags'
      },
      {
        url:'/submoduleManage',
        name: '子模块管理',
        icon: 'tags'
      }
    ]
  },
  {
    name: '产品管理',
    icon: 'tag',
    items: [
      {
        url:'/product-type',
        name: '产品类别',
        icon: 'tags'
      },
      {
        url:'/product',
        name: '产品',
        icon: 'tags'
      },
      {
        url:'/tag',
        name: '标签列表',
        icon: 'tags'
      }
    ]
  },
  {
    name:'合约管理',
    icon: 'tag',
    items: [
      {
        name: '合约类型管理',
        url: '/contract-type',
        icon: 'tags'
      },
      {
        name: '合约产品管理',
        url: '/contract-product',
        icon: 'tags'
      },
      {
        name:'合约列表',
        url: '/contract-list',
        icon:'tags'
      }
    ]
  },
  {
    name: '系统管理',
    icon: 'setting',
    items: [
      {
        url: '/role',
        name: '角色管理',
        icon: 'tags',
      },
      {
        url: '/user',
        name: '用户管理',
        icon: 'tags',
      },
      {
        url: '/config',
        name: '配置管理',
        icon: 'tags',
      },
      {
        url: '/staff',
        name: '员工管理',
        icon: 'tags',
      },
      {
        url: '/menu',
        name: '菜单管理',
        icon: 'tags',
      }
    ]
  },
]
