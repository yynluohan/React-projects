import React from 'react';
import storeIcon from '../../images/supplier-icon.png';
import { getScrollHeight,getScrollTop,getClientHeight} from '../../utils/getHeight';
import styles from '../style.css';
import CommonList from '../../common/listItems/CommonList';
import LineColumnItem from '../../common/listItems/LineColumnItem';

export default class StoreDeatil extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      visible: false,
    }
  }

  onView = () => {
    const crumbsList = [
      {
        url: '#/',
        name: '首页'
      },
      {
        name: '亓口'
      }
    ]
    //将面包屑存于session中
    sessionStorage.setItem('crumbsList',JSON.stringify(crumbsList))
    window.location.href = '#/store'
  }

  render() {

    const { visible } = this.state;

    const style = {
      border:'1px solid #ccc',
      borderTop:'none',
      padding:'1.3em',
      position:'relative',
      backgroundColor:'#fff'
    }

    const topStyle = {
      display: 'flex',
      alignItems: 'center'
    }

    const butStyle = {
      backgroundColor:'#f7b200',
      color:'#fff',
      marginTop:'1.3em',
      fontSize:'16px',
      padding:'0.6em 0',
      textAlign:'center',
      cursor:'pointer',
    }

    const modalStyle = {
      backgroundColor:'#fff',
      borderRadius:'2px',
      boxShadow: '0 1px 10px rgba(0,0,0,0.1)',
      padding:'0.5em',
      position: 'absolute',
      top: '115px',
      width:'200px',
    }

    const storeNameStyle = {
      padding:'1em 0',
      borderBottom:'1px solid #f2f2f2',
      marginBottom:'0.5em',
      textAlign:'center',
    }

    const storeMessageStyle = {
      fontSize:'12px',
      margin:'0.5em 0',
      lineHeight:'17px',
    }

    const listData = [
      {
        image:'http://bfs.biyao.com/group1/M00/EB/3A/rBACW1z0sTyAPinmAACdg2AcIwM979.jpg',
        title: '拉架棉彩色圈圈绣花T恤',
        subTitle: 'Givenchy制造商直供',
        number: '￥179',
        tagName: '一起拼',
        message: '5120条好评',
        status: '精选',
        route: '/store'
      },
      {
        image:'http://bfs.biyao.com/group1/M00/F1/E2/rBACW1z_DeuAa3CVAACYYMD44cA830.jpg',
        title: '拉架棉骷髅涂鸦印花T恤',
        subTitle: 'Givenchy制造商直供',
        number: '￥189',
        tagName: '一起拼',
        route: '/store'
      },
      {
        image:'http://bfs.biyao.com/group1/M00/AD/34/rBACW1yR19eAFU7eAACQLl9BpwM401.jpg',
        title: '双面布丝光柔滑短T（2件）',
        subTitle: 'Givenchy制造商直供',
        number: '￥199',
        tagName: '一起拼',
        route: '/store'
      }
    ]

    const listProps = {
      list:listData.concat(listData,listData),
      loadmore: false,
    }

     return (
      <div style={style}>
        <div style={topStyle}>
          <img style={{width:'75px',border:'1px solid #ccc',cursor:'pointer'}}
               src='http://bfs.biyao.com/group1/M00/03/AE/rBACYVkUkI2APfwPAAC7nzwI-NA595.jpg'
               onMouseEnter={() => this.setState({visible:true})}
               onClick={() => this.onView()}
          />
          <div style={{ marginLeft: '0.9em',fontSize:'12px'}}>
            <div style={{marginBottom:'0.5em'}}>
              商品质量：<span className={styles.numberColor}>4.8</span>
            </div>
            <div>
              服务态度：<span className={styles.numberColor}>4.8</span>
            </div>
          </div>
        </div>
        <div style={butStyle} onClick={() => this.onView()}>进店看看</div>
        {
          visible ?
          <div style={modalStyle} className={styles.trigon}
            onMouseLeave={() => this.setState({ visible:false })}
          >
            <div style={storeNameStyle}>亓口</div>
            <div style={storeMessageStyle} className={styles.grayColor}>
                亓口是一家集研发、设计、生产售后一体的高端服装企业。生产基地拥有
                多年代工Armani LACOSTE等国际知名品牌的经验，自有品牌“QI KOU"原创
                设计师品牌，追求东方美学，关注当代人文、服饰文化及生活方式，全力打造
                符合当前大众的衣衫。与国内知名纺织公司合作开发了众多新型混纺面料，
                加强服用性能。通过C2M模式，以独立的设计精神，让消费者享有国际一线
                品牌的生产流水线产品。
             </div>
          </div>
          : ''
        }
        <CommonList {...listProps}>
          <LineColumnItem/>
        </CommonList>
      </div>
    )
  }

}
