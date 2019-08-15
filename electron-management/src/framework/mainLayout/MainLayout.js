import React from 'react';
import { Layout, Menu,Popover,Icon } from 'antd';
import LeftNav from '../LeftNav';
import styles from './mainLayout.css';
import { Link } from 'dva/router';
import 'antd/dist/antd.css';

const { Header, Content, Sider } = Layout;

export default class MainLayout extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    const sider = document.getElementById('sider');
    sider.style.width = '220px';
    sider.style.maxWidth = '220px'
  }

  loginOut = () => {
    window.localStorage.token = '';
    window.localStorage.menuList = [];
    window.location.href = '#' + '/login';
    window.location.reload()
  }

  onQuery = () => {
    window.scrollTo(0,0);
    window.onbeforeunload = function() {
      var n = window.event.screenX - window.screenLeft;
      var b = n > document.documentElement.scrollWidth - 20;
      if (b && window.event.clientY < 0 || window.event.altKey) {
        console.log("这是一个关闭操作");
      } else {
        window.scrollTo(0,0);
      }
     }
  }

  render(){

    if (this.props.children) {
      this.onQuery()
    }

    const toDoContent = (
      <Icon type="logout" style={{cursor:'pointer'}} onClick={()=>this.loginOut()}/>
    )

    return (
      <div>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div>SaaS manager</div>
          </div>
          <div>
            <Popover content={toDoContent} placement='rightTop'>
              <span>{window.localStorage.username || ''}</span>
            </Popover>
          </div>
        </div>
        <Layout style={{ marginTop:'80px' }}>
          <div className={styles.siderStyle}>
            <Sider id='sider' style={{ width:'230px',height:'100%',overflowY:'scroll',overflowX:'hidden'}}>
              <LeftNav path={window.location.hash.replace('#','')}/>
            </Sider>
          </div>
          <Content id='content' style={{ margin: '0 20px 20px 220px',backgroundColor:'#fff'}}>
            { this.props.children }
          </Content>
        </Layout>
      </div>
    )
  }
}
