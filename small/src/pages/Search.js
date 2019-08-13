import React from 'react';
import BreadCrumbs from '../common/BreadCrumbs';
import CommonList from '../common/listItems/CommonList';
import LineColumnItem from '../common/listItems/LineColumnItem';
import Nav from '../components/nav/Nav';
import StoreIntroduce from '../components/store/StoreIntroduce';
import TopFloatHome from '../components/nav/TopFloatHome';
import ButtomContent from '../components/buttomContent/ButtomContent';
import FixedArrow from '../common/FixedArrow';


export default class Search extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      scrollHeight: 0
    }
  }

  getScrollHeight = (data) => {
    this.setState({
      scrollHeight: data
    })
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

  render() {

    const { scrollHeight } = this.state;

    const item = {
      title: '拉架棉彩色圈圈绣花T恤',
      subTitle: 'Givenchy制造商直供',
      number: '￥179',
      tagName: '一起拼',
      message: '5120条好评',
      status: '精选',
    }

    let list = [
      {
        image:'http://bfs.biyao.com/group1/M00/AD/0B/rBACW1yRnGKAeOmiAABgLxD0G-4493.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/33/79/rBACVFrW2YCAWLQwAABwFT1xVps986.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/94/76/rBACVFxP_BWADHR6AACBS8xCZsQ717.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/4A/E0/rBACVFtyPVqACvNSAABHuB63pd4558.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/BE/07/rBACVFy4Dp6AaHxFAAB2EWQo8EQ623.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/52/99/rBACVFuJ5seAIJIsAACLAqjMpnc913.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/5D/61/rBACYVuvPyCAZRImAACXxYnRHy4127.jpg',
        ...item
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
          <div style={{ padding: '1.5em 0 1.5em 1.5em',margin:'0.8em 0 2em 0',backgroundColor:'#fff',fontSize:'12px'}}>
            根据您搜索的“风衣女”，为您匹配到以下商品：
          </div>
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
