import React from 'react';
import styles from './base.css';

export default class MallTips extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectIndex: -1
    }
  }

  onMouseEnter = (item,index) => {
    this.setState({
      selectIndex: index
    })
  }

  onMouseLeave = () => {
    this.setState({
      selectIndex: -1
    })
  }

  render() {

    const { selectIndex } = this.state;

    const list = [
      {
        title:'7天无忧退款',
        message:'根据国家七天无理由退货规范，为您办理退货退款，具体退货政策见商品详情页'
      },
      {
        title:'先行赔付',
        message:'争议可申述，申述成功，立即退款'
      },
      {
        title:'超时赔偿',
        message:'未按承诺时间发货，系统自动赔付（赔偿金额为订单商品金额的30%，上限500元）'
      },
      {
        title:'顺丰包邮',
        message:'运费由商家承担'
      }
    ]

    const itemStyle = {
      display:'flex',
      alignItems:'center',
      marginRight:'0.5em',
      cursor:'pointer',
      position:'relative',
      color:'#666',
    }

    const messageStyle = {
      padding:'1em',
      backgroundColor:'#fff',
      position:'absolute',
      top:'28px',
      minWidth:'250px',
      borderRadius:'5px',
      fontSize:'12px',
      lineHeight: '20px',
      boxShadow: '0 1px 10px rgba(0,0,0,0.1)',
    }

     return (
      <div style={{ display:'flex',fontSize:'12px' }}>
        {
          list.length > 0 && list.map((item,index) => (
            <div id='policy' key={index} style={itemStyle}
                 onMouseEnter={() => this.onMouseEnter(item,index)}
                 onMouseLeave = {() => this.onMouseLeave()}
            >
              <img src={require('../images/policy-icon.png')}/>
              <span style={{margin:'0 0.5em'}}>{item.title}</span>
              {
                selectIndex == index ?
                <div style={messageStyle} className={styles.trigon}>{item.message}</div>
                : ''
              }
            </div>
          ))
        }
      </div>
    )
  }
}
