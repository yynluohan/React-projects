import React from 'react';
import CommonList from '../common/listItems/CommonList';
import Nav from '../components/nav/Nav';
import TopFloatHome from '../components/nav/TopFloatHome';
import BreadCrumbs from '../common/BreadCrumbs';
import NewsList from '../components/news/NewsList';
import ButtomContent from '../components/buttomContent/ButtomContent'
import FixedArrow from '../common/FixedArrow';


export default class News extends React.Component {

  componentDidMount() {
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

  render() {

    const { scrollHeight } = this.state;

    const item = {
      status: '一起拼',
      subTitle: 'FABER制造商直供',
      title: '便携式电热水杯',
      number: '￥169',
      message: '350ML小容量、304不锈钢内胆、双重防烫设计、智能自动保温',
      route: '/productDetail'
    }

    const data = [
      {
        time: '2019-06-17',
        list: [
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/F5/58/rBACYV0DYBSAfVgLAAGvirD8DI8074.jpg',
          },
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/F2/20/rBACYVz_RcuAAjHkAAGsWfJlmYs867.jpg',
            message:'甄选优质棉麻牛仔面料，柔软舒适，透气优良，上身清爽；微弹力，舒适不紧绷'
          },
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/F1/8F/rBACVF0At_SAf2TfAAGalKS1cwg508.jpg',
            message: '140S细腻、缜密的超高三股纱珠地，手感爽滑，丝光整理后硬挺有光泽'
          },
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/F1/6E/rBACVF0ApSOABwjhAAFFv9eQU10907.jpg'
          },
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/F3/76/rBACYV0AzwaAZXRXAADgixzqCBI804.jpg'
          }
        ]
      },
      {
        time: '2019-06-16',
        list: [
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/EC/54/rBACVFz4tWCASVaDAAFMr3aAZaE791.jpg'
          },
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/E7/DA/rBACW1zwibWAbTe_AACPBFjom6w043.jpg'
          },
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/EC/3F/rBACW1z2EMGAEPobAADGM-lz8Bs011.jpg'
          },
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/F5/4B/rBACYV0DVV2AFHTUAAG5-NbaDA4417.jpg'
          },
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/F2/E9/rBACYV0AaymAGpxvAADQQZ5jk4A573.jpg'
          }
        ]
      },
      {
        time: '2019-06-16',
        list: [
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/EF/88/rBACVFz-EyqAOtIZAAGU80SXxcs163.jpg'
          },
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/F2/D1/rBACW10AVvmARuuqAAIjEfUUlv0729.jpg'
          },
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/F5/04/rBACYV0DE6mAVTVyAAIMrd_xxC0198.jpg'
          },
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/F3/31/rBACYV0ArWOABN0WAAE07I6IeSE344.jpg'
          },
          {
            ...item,
            image: 'http://bfs.biyao.com/group1/M00/E6/FD/rBACYVzvZ4OAARwCAAFrUlxoBi4633.jpg'
          }
        ]
      }
    ]

    const listProps = {
      list:data.concat(data,data,data),
    }

    const fixedArrowProps = {
      height: scrollHeight,
    }

    const navProps = {
      getScrollHeight:this.getScrollHeight
    }

    return (
      <div>
        <Nav {...navProps}>
          <TopFloatHome/>
        </Nav>
        <div style={{ padding: '0 10%'}}>
          <BreadCrumbs />
          <NewsList {...listProps}/>
        </div>
        <ButtomContent/>
        <FixedArrow {...fixedArrowProps}/>
      </div>
    )
  }

}
