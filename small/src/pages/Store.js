import React from 'react';
import BreadCrumbs from '../common/BreadCrumbs';
import CommonList from '../common/listItems/CommonList';
import LineColumnItem from '../common/listItems/LineColumnItem';

import Nav from '../components/nav/Nav';
import StoreIntroduce from '../components/store/StoreIntroduce';
import TopFloatHome from '../components/nav/TopFloatHome';
import ButtomContent from '../components/buttomContent/ButtomContent';
import FixedArrow from '../common/FixedArrow';

export default class Store extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      scrollHeight: 0
    }
  }

  componentDidMount() {
    // document.body.scrollTop = document.documentElement.scrollTop = 0
    window.onbeforeunload = function() {
      var n = window.event.screenX - window.screenLeft;
      var b = n > document.documentElement.scrollWidth - 20;
      if(b && window.event.clientY < 0 || window.event.altKey){
          alert("这是一个关闭操作而非刷新");
      }else{
          // alert("这是一个刷新操作而非关闭");
          document.documentElement.scrollTop = document.body.scrollTop = 0
      }
     }
  }

  getScrollHeight = (data) => {
    this.setState({
      scrollHeight: data
    })
  }

  render() {

    const { scrollHeight } = this.state

    let list = [
      {
        image:'http://bfs.biyao.com/group1/M00/EB/3A/rBACW1z0sTyAPinmAACdg2AcIwM979.jpg',
        title: '拉架棉彩色圈圈绣花T恤',
        subTitle: 'Givenchy制造商直供',
        number: '￥179',
        tagName: '一起拼',
        message: '5120条好评',
        status: '精选',
        route: '/productDetail'
      },
      {
        image:'http://bfs.biyao.com/group1/M00/F1/E2/rBACW1z_DeuAa3CVAACYYMD44cA830.jpg',
        title: '拉架棉骷髅涂鸦印花T恤',
        subTitle: 'Givenchy制造商直供',
        number: '￥189',
        tagName: '一起拼',
        route: '/productDetail'
      },
      {
        image:'http://bfs.biyao.com/group1/M00/AD/34/rBACW1yR19eAFU7eAACQLl9BpwM401.jpg',
        title: '双面布丝光柔滑短T（2件）',
        subTitle: 'Givenchy制造商直供',
        number: '￥199',
        tagName: '一起拼',
        route: '/productDetail'
      }
    ]

    const listProps = {
      loadmore:false,
      list:list.concat(list,list,list,list),
      style:{
        display: 'flex',
        flexWrap: 'wrap',
        margin:'0 auto',
      },
      itemStyle:{
        width:'25%',
        display:'flex',
        justifyContent: 'space-between',
      },
    }

    const lineColumnItemProps = {
      style:{
        margin:'0 4% 8% 4%',
        backgroundColor:'#fff',
        border:'none',
        padding: '0.5em 1em'
      }
    }

    const navProps = {
      getScrollHeight:this.getScrollHeight
    }

    const fixedArrowProps = {
      height: scrollHeight,
    }

    return(
      <div>
        <Nav {...navProps}>
          <TopFloatHome/>
        </Nav>
        <div style={{padding:'0 10%'}}>
          <BreadCrumbs/>
          <StoreIntroduce />
          <CommonList {...listProps}>
            <LineColumnItem {...lineColumnItemProps}/>
          </CommonList>
        </div>
        <ButtomContent />
        <FixedArrow {...fixedArrowProps}/>
      </div>
    )

  }

}
