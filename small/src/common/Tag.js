import React from 'react';
import specsActive from '../images/specs-active.png';

export default class Tag extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: props.list || [],
      selectIndex:0,
    }
  }

  onClick = (item,index) => {
    this.setState({
      selectIndex:index
    })
  }

  render() {

    const { list,selectIndex } = this.state;

    const style = {
      display:'flex',
      flexWrap:'wrap'
    }

    const itemStyle = (index) => {
      return {
        display:'inline-block',
        padding: '0.5em 1em',
        border: selectIndex == index ? '1px solid #523669' : '1px solid #ccc',
        marginRight:'0.5em',
        cursor:'pointer',
        color:'#666',
        fontSize:'14px',
        position:'relative',
        marginBottom:'0.5em'
      }
    }

    const iconStyle = {
      position:'absolute',
      right:0,
      bottom:0,
      width:'20px',
    }

    return(
      <div style={style}>
        {
          list.length > 0 && list.map((item,index) => (
            <div key={index} style={itemStyle(index)} onClick={() => this.onClick(item,index)}>
              <span>{item}</span>
              {
                selectIndex == index ?
                <img src={specsActive} style={iconStyle}/>
                : ''
              }
            </div>
          ))
        }
      </div>
    )
  }

}
