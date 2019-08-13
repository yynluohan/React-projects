import React from 'react';
import CommonList from '../../common/listItems/CommonList';
import LeftRightItem from '../../common/listItems/LeftRightItem'

export default class NewsList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: props.list || []
    }
  }

  render() {

    const { list } = this.state;

    const listProps = (item) => {
      return {
        list:item.list,
        loadmore:false,
      }
    }

    return (
      <div>
        {
          list.length > 0 && list.map((item,index) => (
            <div key={index}>
              <div style={{ fontSize: '24px',color: '#666',textAlign: 'center',marginBottom:'1em'}}>{ item.time }</div>
              <CommonList { ...listProps(item)}>
                <LeftRightItem />
              </CommonList>
            </div>
          ))
        }
      </div>
    )
  }
}
