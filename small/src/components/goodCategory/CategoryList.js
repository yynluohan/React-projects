import React from 'react';
import CommonList from '../../common/listItems/CommonList';
import LineColumnItem from '../../common/listItems/LineColumnItem';
import styles from './categoryList.css'

export default class CategoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      typeList: [{name:'男士内搭',id:'1'},{name:'男士下装',id:'2'},{name:'男士外套',id:'3'}],
      data: props.data || []
    }
  }

  onClickType = (data) => {

  }

  render() {

    const { typeList,data } = this.state;

    const commonListProps = (k) => {
      return {
        list: k.list,
        loadmore: false,
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
    }

    const lineColumnItemProps = {
      style:{
        margin:'0 4% 8% 4%',
        backgroundColor:'#fff',
        border:'none',
        padding: '0.5em 1em'
      }
    }

    return(
      <div>
        <div style={{ marginTop:'0.8em',backgroundColor: '#fff',padding: '1em',color: '#666'}}>
          <span>男装：</span>
          {
            typeList.length > 0 && typeList.map((item,index) => (
              <span key={index} onClick={() => this.onClickType(item)} className={styles.typeItemNameStyle}>
                {item.name}
              </span>
            ))
          }
        </div>

        {
          data.length > 0 && data.map((item,index) => (
            <div key={index}>
              <div style={{ margin: '1em 0',textAlign: 'center',fontSize:'24px'}}>{ item.type }</div>
              <CommonList key={index} {...commonListProps(item)}>
                <LineColumnItem {...lineColumnItemProps}/>
              </CommonList>
            </div>
          ))
        }
      </div>
    )
  }
}
