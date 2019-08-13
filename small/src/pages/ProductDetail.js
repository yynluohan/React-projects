import React from 'react';
import Nav from '../components/nav/Nav';
import BreadCrumbs from '../common/BreadCrumbs';
import ProductImages from '../components/productDetail/ProductImages';
import ProductInfo from '../components/productDetail/ProductInfo';
import BrowserScrolling from '../common/BrowserScrolling';
import ButtomContent from '../components/buttomContent/ButtomContent';
import FixedArrow from '../common/FixedArrow';



export default class ProductDetail extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      scrollTop: 0
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

  render() {

    const { scrollTop } = this.state;

      const list = [
        {
          url:'http://bfs.biyao.com/group1/M00/3F/89/rBACW1swuMOAafhcAAD099Dpi6o440.jpg'
        },
        {
          url:'http://bfs.biyao.com/group1/M00/3D/D4/rBACVFswuMSAU95zAADxdznZph0506.jpg'
        },
        {
          url:'http://bfs.biyao.com/group1/M00/3F/81/rBACYVswuMqAP2d1AADunRXAiq8510.jpg'
        },
        {
          url:'http://bfs.biyao.com/group1/M00/3D/D4/rBACVFswuMuADZYlAAEznSHzqUQ889.jpg'
        },
        {
          url:'http://bfs.biyao.com/group1/M00/3F/89/rBACW1swuM2AHxAlAAGEI3RtqNA510.jpg'
        }
      ]

    const productImagesProps = {
      list,
    }

    const productInfoProps = {
      scrollTop
    }

    const scrollProps = {
      onGetHeight:(data) => this.setState({scrollTop: data})
    }

    const fixedArrowProps = {
      height: scrollTop,
    }

    return(
      <div>
        <BrowserScrolling {...scrollProps}/>
        <Nav />
        <div style={{padding:'0 10%',backgroundColor:'#fff'}}>
          <BreadCrumbs/>
          <ProductImages {...productImagesProps}/>
          <div style={{marginTop:'2em'}}>
            <ProductInfo {...productInfoProps}/>

          </div>
        </div>
        <ButtomContent />
        <FixedArrow {...fixedArrowProps}/>
      </div>
    )

  }

}
