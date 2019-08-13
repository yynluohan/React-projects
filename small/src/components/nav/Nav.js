import React from 'react';
import styles from './nav.css';
import SearchInput from '../../common/SearchInput';
import Modal from '../../common/commonModal/Modal'

export default class Nav extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      typeList:['风衣女','羊绒衫','面膜','口红','连衣裙','外套','夹克','大衣','耳机','护肤'],
      navList:[
        {
          list:['首页','每日上新']
        },
        {
          list:['了解Small','下载Small APP']
        },
        {
          list:['我的Small']
        }
      ],
      scrollHeight: 0,
      visible1: false,
      visible2: false,
    }
  }

  componentDidMount() {
    // document.body.scrollTop = document.documentElement.scrollTop = 0
  }

  componentWillMount(){
    window.addEventListener('scroll', this.scrollFunction)
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.scrollFunction)
  }

  scrollFunction = () => {
    this.setState({
      scrollHeight:document.documentElement.scrollTop
    })
    if (this.props.getScrollHeight) {
      this.props.getScrollHeight(document.documentElement.scrollTop)
    }
  }

  onSearch = (data) => {
    console.log('需要查询的内容',data);

  }

  onClick = (data) => {
    console.log('KKKK=== ',data);
    if (data == '首页') {
      window.location.href = '#/'
    }
    if (data == '每日上新') {
      const crumbsList = [
        {
          url: '#/',
          name: '首页'
        },
        {
          name: data
        }
      ]
      //将面包屑存于session中
      sessionStorage.setItem('crumbsList',JSON.stringify(crumbsList))
      window.location.href = '#/news'
    }
  }

  onClickType = (data) => {
    const crumbsList = [
      {
        url: '#/',
        name: '首页'
      },
      {
        name: '全部分类'
      },
      {
        name: data
      }
    ]
    //将面包屑存于session中
    sessionStorage.setItem('crumbsList',JSON.stringify(crumbsList))
    window.location.href = `#/search?query=${data}`
  }

  onMouseEnter = (data) => {
    let { visible1,visible2 } = this.state;
    if (data == '了解Small') {
      // visible1 = true
    }
    if (data == '我的Small') {
      // visible2 = true
    }
    this.setState({
     visible1,
     visible2
    })
  }

  onMouseLeaver = (data) => {
    let { visible1,visible2 } = this.state;
    if (data == '了解Small') {
      // visible1 = false
    }
    if (data == '我的Small') {
      visible2 = false
    }
    this.setState({
     visible1,
     visible2
    })
  }

  onMouseLeave = (data) => {
    this.setState({
     visible1:false,
     visible2:false
    })
  }

  render() {

    const { typeList,navList,scrollHeight,visible1,visible2 } = this.state;
    const { fixedHeight = 50 } = this.props;

    const searchInputProps = {
      onSearch:this.onSearch,
    }

    const modalProps1 = {
      visible: visible1,
      updateVisible:() => this.setState({ visible1: false })
    }

    const modalProps2 = {
      visible: visible2,
      updateVisible:() => this.setState({ visible2: false})
    }

    const createCommonElement = () => {
      return (
        <div className = {styles.container}>
          <div className={styles.topStyle}>
            {/*<img className={styles.logo} src='http://static3.biyao.com/pc/common/img/master/logo.png'/>*/}
            <img className={styles.logo} src={require('../../images/logo1.png')}/>
            <div style={{width:'40%'}}>
              <SearchInput {...searchInputProps}/>
              <div style={{marginTop:'0.5em'}}>
                {
                  typeList.length > 0 && typeList.map((item, index) => (
                    <span onClick={() => this.onClickType(item)}
                          className={styles.typeName} key={index}
                    >
                          {item}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>

          <div style={{fontSize:'16px'}}>
            {
              navList.length > 0 && navList.map((item,index) => (
                <span key={index} className={styles.navItem}
                      style={{borderRight:index == navList.length - 1 ? 'none' : '1px solid #bbb' }}
                >
                  {
                    item.list.length > 0 && item.list.map((k,i) => (
                        <span className={styles.navItemName} key={i} onClick={() => this.onClick(k)}
                              onMouseEnter = {() => this.onMouseEnter(k)}
                              onMouseLeave = {() => this.onMouseLeave(k)}
                        >
                        {k}
                          {
                            k == '了解Small' && visible1 ?
                            <Modal {...modalProps1}>
                              <div style={{ fontSize:'15px',color:'#4e4e4c',lineHeight:'23px' }}>
                                <div>关注Small微信公众号</div>
                                <div>了解你想了解的一切</div>
                                <div>小必姐在此发福利哦</div>
                              </div>
                            </Modal>
                            : ''
                          }
                          {
                            k == '我的Small' && visible2 ?
                            <Modal {...modalProps2}>
                              <div style={{ fontSize:'15px',color:'#4e4e4c',lineHeight:'23px' }}>
                                <div>扫码下载Small app</div>
                                <div>手机用户独享海量权益</div>
                              </div>
                            </Modal>
                            : ''
                          }
                      </span>
                    ))
                  }
                </span>
              ))
            }
          </div>
        </div>
      )
    }

    return(
      <div>
        {
          scrollHeight > fixedHeight && this.props.children ?
          <div style={{height:'60px'}}>
            {this.props.children}
          </div>
          :
          createCommonElement()
        }
      </div>
    )
  }
}
