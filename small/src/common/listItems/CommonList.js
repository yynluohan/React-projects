import React from 'react';
import { query } from '../../utils/services';
import { getScrollHeight,getScrollTop,getClientHeight} from '../../utils/getHeight';
import { gateWay } from '../../utils/transform';

export default class CommonList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: props.list || [],
      current: 1,
      total:0,
      isMore:false,  //是否全部获取完数据
      pageSize: props.pageSize || 10,
    }
  }

  componentDidMount() {
    if(this.props.API){
      this.getList()
    }
  }

  componentWillMount(){
      window.addEventListener('scroll', this.scrollFunction)
    }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.scrollFunction)
  }

  scrollFunction = () => {
    const { list,total,current } = this.state;
    const bottomHeight = getScrollHeight() - getScrollTop() - getClientHeight();
    if (bottomHeight < 150 && list.length < total && this.props.API) {
      const data = {
        pageNum:current + 1,
      }
      if(this.props.onPagination){
        this.props.onPagination(current)
      } else {
        this.getList(data)
      }
    }
  }

  //如果传入API时，调用api获取数据
   getList = (queryData) => {
     const { list=[],pageSize } = this.state;
     query(this.props.API,{...queryData,pageSize}).then(({ code, data }) => {
       if (code == 200) {
         if (this.props.getList) {
           this.props.getList(data)
         }
         let isMore = false;
         const getLsit = data.records ? list.concat(data.records) : data.data ? list.concat(data.data) : [];
         if (list.length > 0) {
           if (getLsit.length == 0 || getLsit.length == data.total) {
             isMore = true
           }
         }
         this.setState({
           list: getLsit,
           current: data.current || 1,
           total: data.total || 0,
           isMore,
         })
       }
     })
   }

  render() {

    const { gateWayData = {},item = {},loadmore = true } = this.props;
    const { list,current,total,isMore } = this.state;
    const _this = this;

    const createItem = (itemData,index) => {
      itemData = gateWay(gateWayData,itemData);
      itemData.listLength = list.length || 0;
      itemData.currentIndex = index;
      if(this.props.children){
        const child = this.props.children;
        const index = index;
        return React.cloneElement(child,{
          itemData:{
            ...itemData,
            currentIndex:index
          },
        })
      }
    }

    const showFooter = () => {
      const style = {
        textAlign: 'center',
        margin:'0.5em'
      }
      if (isMore) {
        return <div style={ style }>我也是有底线的！</div>
      } else {
        return <div style={ style }>loading...</div>
      }
    }

    return (
      <div style={this.props.style}>
        {
          list.length > 0 && list.map((item, index) => (
            <div key={ index } style={this.props.itemStyle}>
              { createItem(item,index) }
            </div>
          ))
        }
        { loadmore  ? showFooter() : '' }
      </div>
    )

  }
}
