import React from 'react';
import styles from './base.css';

export default class NavTypeList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list:[
        {
          data:[{name:'咖啡',id:'1'},{name:'饮食',id:'2'},{name:'正餐',id:'3'}]
        },
        {
          data:[{name:'男装',id:'1'},{name:'女装',id:'2'},{name:'眼镜',id:'3'}]
        },
        {
          data:[{name:'鞋靴',id:'1'},{name:'内衣装饰',id:'2'}]
        },
        {
          data:[{name:'美妆',id:'1'},{name:'个性',id:'2'},{name:'餐厨',id:'3'}]
        },
        {
          data:[{name:'母婴',id:'1'},{name:'箱包',id:'2'}]
        },
        {
          data:[{name:'运动',id:'1'},{name:'电器',id:'2'}]
        },
        {
          data:[{name:'数码',id:'1'},{name:'家纺',id:'2'}]
        },
        {
          data:[{name:'家具',id:'1'},{name:'家装',id:'2'},{name:'汽配',id:'3'}]
        },
        {
          data:[{name:'健康保健',id:'1'},{name:'宠物',id:'2'},{name:'定制',id:'3'}]
        },
      ]
    }
  }

  onClick = (data) => {
    const crumbsList = [
      {
        url: '#/',
        name: '首页'
      },
      {
        name: data.name
      }
    ]
    //将面包屑存于session中
    sessionStorage.setItem('crumbsList',JSON.stringify(crumbsList))
    window.location.href = '#/goodCategory'
  }

  render() {

    const { list } = this.state;

    const style = {
      padding:'10px 0',
      backgroundColor:'#554D5D',
      height:'322px'
    }

    const itemStyle = {
      padding:'0.6em 0 0.6em 2em',
      fontSize:'14px'
    }

    return (
      <div className={styles.color} style={style}>
        {
          list.length > 0 && list.map((item,index) => (
            <div key={index} style={itemStyle} className={styles.hoverStyle}>
              {
                item.data.length > 0 && item.data.map((k,i) => (
                  <span key={i} style={{ marginRight:'0.5em'}}>
                    <a onClick={() => this.onClick(k)} href="javascript:void(0);">{k.name}</a>
                    {
                      i != item.data.length - 1 ?
                      <span style={{marginLeft:'0.5em'}}>/</span>
                      : ''
                    }
                  </span>
                ))
              }
            </div>
          ))
        }
      </div>
    )
  }

}
