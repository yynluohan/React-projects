import React from 'react';
import storeIcon from '../../images/supplier-icon.png';
import { getScrollHeight,getScrollTop,getClientHeight} from '../../utils/getHeight';


export default class FixedHeader extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectIndex: 0,
      scrollHeight: 0,
      offSetHeight: 0,
      firstHeight:0,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      scrollHeight: nextProps.scrollTop
    })
  }

  componentDidMount() {
    var height = document.getElementById('productInfoHeader').offsetTop;
    this.setState({
      firstHeight: height
    })
  }

  onClick = (index) => {
    this.setState({
      selectIndex: index
    })
    if (this.props.onSelect) {
      this.props.onSelect(index)
    }
  }

  render() {

    const { selectIndex,scrollHeight,offSetHeight,firstHeight } = this.state;
    console.log('KKKK ===0',scrollHeight,offSetHeight);


    const style = () => {
      if (offSetHeight < scrollHeight && scrollHeight > firstHeight ) {
        return {
          backgroundColor:'#EEECEF',
          border:'1px solid #ccc',
          display:'flex',
          position:'fixed',
          top:0,
          width: '80%',
          zIndex:'101',
        }
      } else {
        return {
          backgroundColor:'#EEECEF',
          border:'1px solid #ccc',
          display:'flex',
        }
      }
    }

    const leftStyle = {
      width:'25%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      borderRight:'1px solid #ccc',
      cursor:'pointer',
      padding:'1.3em 0'
    }

    const rightStyle = (index) => {
      return {
        width:'25%',
        borderRight:'1px solid #ccc',
        cursor:'pointer',
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderBottom:selectIndex == index ? '2px solid #523669' : 'none',
        backgroundColor: selectIndex == index ? '#fff' : '#EEECEF',
      }
    }

     return (
      <div style={style()} id='productInfoHeader'>
        <div style={leftStyle} onClick={() => this.props.onViewStore()}>
          <img style={{marginRight:'0.8em'}} src={storeIcon}/>
          <span>亓口</span>
        </div>
        <div style={{display:'flex',width:'75%'}}>
          <div style={rightStyle(0)} onClick={() => this.onClick(0)}>商品信息</div>
          <div style={rightStyle(1)} onClick={() => this.onClick(1)}>评价详情（50）</div>
        </div>
      </div>
    )
  }

}
