import React from 'react';
import search from '../images/search.png';

class SearchInput extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: props.value || ''
    }
  }

  componentDidMount() {
    this.getValue()
  }

  getValue = () => {
    if (location.href.indexOf('search') > -1) {
      const query = location.hash.split('?').length > 1 ? location.hash.split('?')[1] : '';
      let list = query.split('&');
      let value = '';
      list.length > 0 && list.map((item,index) => {
        if (item.indexOf('query') > -1) {
          value = decodeURIComponent(item.split('=')[1])
        }
      })
      this.setState({
        value
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    this.getValue()
  }

  onChange = (e) => {
    if (this.props.onGetSearchDate) {
      this.props.onGetSearchDate(e.target.value)
    }
    this.setState({
      value: e.target.value
    })
  }

  onSearch = () => {
    const { value } = this.state;
    if (this.props.onSearch) {
      this.props.onSearch(value)
    }
  }

  render() {

    const { width='86%' } = this.props;
    const { value } = this.state;

    const iconStyle = {
      display: 'inline-block',
      width: '35px',
      height: '39px',
      border: '1px solid #aeabab',
      borderLeft: 'none',
      verticalAlign: 'middle',
      background: `url(${search}) center center no-repeat`,
      cursor: 'pointer',
    }

    const inputStyle = {
      width,
      height: '35px',
      paddingLeft: '10px',
      color: '#bbb',
      fonSize: '14px',
      verticalAlign: 'middle',
    }

    return (
      <span style={{width:'100%',display:'flex'}}>
        <input
          style={inputStyle}
          placeholder='请输入要搜索的商品'
          onChange={(e) => this.onChange(e)}
          value = {value}
       />
        <span style={iconStyle} onClick={() => this.onSearch()}></span>
      </span>
    )
  }

}

export default SearchInput
