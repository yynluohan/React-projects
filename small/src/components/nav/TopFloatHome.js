import React from 'react';
import SearchInput from '../../common/SearchInput';

export default class TopFloatHome extends React.Component {

  onSearch = (data) => {
    console.log('需要查询的内容',data);
  }

  render() {

    const style = {
      padding:'0 10%',
      height:'60px',
      width:'80%',
      position:'fixed',
      top:'0',
      zIndex:101,
      backgroundColor:"#fff",
      transition: 'all .3s',
      boxShadow: '0 2px 4px rgba(0,0,0,.05)',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center'
    }

    const searchInputProps = {
      onSearch:this.onSearch
    }

    return (
      <div style={style}>
        <div style={{display:'flex',alignItems:'center'}}>
          <span>全部分类</span>
          <img style={{width:'20px',height:'15px',marginLeft:'0.3em'}} src={require('../../images/down.png')}/>
        </div>
        <div style={{width:'40%'}}>
          <SearchInput {...searchInputProps}/>
        </div>
      </div>
    )
  }
}
