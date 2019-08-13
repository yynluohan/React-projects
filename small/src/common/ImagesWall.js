import React from 'react';

export default class ImagesWall extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list:props.list || [],
      url: props.list && props.list.length > 0 ? props.list[0].url : '',
      selectIndex:0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list && nextProps.list.length > 0) {
      this.setState({
        list: nextProps.list
      })
    }
  }

  onClick = (item,index) => {
    this.setState({
      url: item.url,
      selectIndex:index
    })
  }

  render() {

    const { list,url,selectIndex } = this.state;

    const imageListStyle = (index) => {
      if (selectIndex == index) {
        return {
          width:'calc(100% - 2px)',
          marginBottom:'10px',
          cursor:'pointer',
          border: '1px solid #523669'
        }
      } else {
        return {
          width:'calc(100% - 2px)',
          marginBottom:'10px',
          cursor:'pointer',
          border: '1px solid #ccc'
        }
      }
    }

    return (
      <div style={{width:'100%',display: 'flex',justifyContent:'space-between'}}>
        <div style={{ width:'80%'}}>
          <img src={url} style={{width:'calc(100% - 2px)',border:'1px solid #ccc'}}/>
        </div>
        <div style={{width:'calc((80% - 55px) / 5)'}}>
          {
            list.length > 0 && list.map((item, index) => (
              <img key={index} src={item.url} style={imageListStyle(index)}
                   onClick={() => this.onClick(item,index)}/>
            ))
          }
        </div>
      </div>
    )

  }

}
