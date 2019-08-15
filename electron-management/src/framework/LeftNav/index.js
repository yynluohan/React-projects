import React from 'react';
import { Menu, Icon, } from 'antd';
import { withRouter, Link } from 'dva/router'
import router from '../../../public/routerConfig';

const { SubMenu } = Menu;

class LeftNav extends React.Component {

  constructor(props){
    super(props);
    console.log('GGGGG',window.localStorage);
    this.state = {
      // router:  window.localStorage.menuList && window.localStorage.menuList.length > 0 && JSON.parse(window.localStorage.menuList).items.length > 0 ?
              // JSON.parse(window.localStorage.menuList).items : []
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('MMMM33333 ',nextProps);
  }

  render() {

    const { path } = this.props;
    // const { router } = this.state;

    function createSubMenu(router,i){
      const { name, url, icon, items } = router;
      if (items && items.length > 0) {
        return (
          <SubMenu
            key={ url || i }
            title={ <span><Icon type={icon} />{ name }</span> }
          >
            { items.map((item,k) => {
              const { name, url, icon,items } = item;
              if (items) {
                return createSubMenu(item,k)
              } else {
                return <Menu.Item key={url}>
                  <Link to={url}>
                    <div>
                      <Icon type={icon} />
                      <span>{name}</span>
                    </div>
                  </Link>
                </Menu.Item>
              }
            }) }
          </SubMenu>
        )
      } else {
        if (path) {
          return <Menu.Item key={url}>
            <Link to={url}>
              <div>
                <Icon type={icon} />
                <span>{name}</span>
              </div>
            </Link>
          </Menu.Item>
        }
      }
      {/*return <Menu.Divider key={i} />*/}
    }

    return <Menu
      theme='dark'
      mode="inline"
      style={{ height: '100%' }}
      selectedKeys={[path]}
    >
      {
        router.map((router,i) => {
          return createSubMenu(router,i)
        })
      }
    </Menu>
  }

}


export default withRouter(LeftNav)
