import React from 'react';


class RadioButtton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectIndex: 0, //当前选中的index
      color: props.color || '#523669',
    }
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

    const { list = [] } = this.props;
    const { selectIndex,color } = this.state;

    const roundStyle = {
      display:'inline-block',
      width: '15px',
      height: '15px',
      borderRadius:'50%',
      border: '1px solid #ccc',
      backgroundColor:'#fff',
      cursor:'pointer',
    }

    const selectedStyle = {
      ...roundStyle,
      position:'relative',
      borderColor: color,
    }

    const inlineRoundStyle = {
      position: 'absolute',
      width:'70%',
      height: '70%',
      borderRadius:'50%',
      backgroundColor: color,
      left:'2.5px',
      top:'2.5px'
    }

    return (
      <div style={{ display: 'flex'}}>
        {
          list.length > 0 && list.map((item,index) => (
            <span key={index} style={{ display: 'flex',alignItems:'center',marginRight:'1em'}}
              onClick={() => this.onClick(index)}
            >
              {
                selectIndex == index ?
                <span style={ selectedStyle }>
                  <span style={inlineRoundStyle}></span>
                </span>
                :
                <span style={roundStyle}></span>
              }
              <span style={{marginLeft:'0.5em'}}>
                {item.name}
              </span>
            </span>
          ))
        }
      </div>
    )
  }
}

export default RadioButtton
