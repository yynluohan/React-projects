import React from 'react';
import rightBaTop from '../images/rightBar-top.png';
import rightBarHover from '../images/rightBar-topActive.png';

export default class FixedArrow extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      height: 0,
      url: rightBaTop
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.height != undefined) {
      this.setState({
        height: nextProps.height
      })
    }
  }

  onMouseEnter = () => {
    this.setState({
      url: rightBarHover,
    })
  }

  onMouseLeave = () => {
    this.setState({
      url: rightBaTop
    })
  }

  onClick = () => {
    let x = this.state.height;
    var timer = setInterval(function(){
        var dtop = document.documentElement.scrollTop;
        var speed = Math.floor(-dtop / 5);
        document.documentElement.scrollTop = dtop + speed;
        if(dtop == 0){
          clearInterval(timer);
        }
    },10)
  }

  render() {

    const { height,url } = this.state;

    const style = {
      position: 'fixed',
      bottom: '20%',
      right: '5%',
    }

    const imageStyle = () => {
      if (height > 100) {
        return {
          display: 'inline-block',
          transition: 'all 2s',
          transition:'width 2s',
        }
      } else {
        return {
          display: 'none',
          transition: 'all 2s',
        }
      }
    }

    return (
      <div style={ height && height > 100 ? style : {} }>
        <img src={url} style={imageStyle()}
             onMouseEnter={() => this.onMouseEnter()}
             onMouseLeave={() => this.onMouseLeave()}
             onClick={() => this.onClick()}
        />
      </div>
    )
  }

}
