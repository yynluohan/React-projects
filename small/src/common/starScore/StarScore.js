import React from 'react';
import star from '../../images/star-gray.png';
import starSelected from '../../images/star-yellow.png';

export default class StarScore extends React.Component {

  render() {

    const { value = 3.6 } = this.props;


    const fontImage  = (width) => {
      return {
        position: 'absolute',
        left:0,
        height:'18px',
        width: '18px',
        clip: `rect(0 ${width} 100vh 0)`,
      }
    }

    const bgImage = {
      height:'18px',
      width: '18px',
    }

    const selectedImage = {
      position: 'absolute',
      left:0,
      top:0,
    }

    const lastNumber = value.toString().split('.').length > 1 ? Number(value.toString().split('.')[1]) : 0;

    let width1 = 0;
    let width2 = 0;
    let width3 = 0;
    let width4 = 0;
    let width5 = 0;

    if(0 < value && value < 1) {
      width1 = (1.8*lastNumber).toFixed(2) + 'px';
    }
    if(1 < value && value < 2) {
      width1 = '18px';
      width2 = (1.8*lastNumber).toFixed(2) + 'px'
    }
    if(2 < value && value < 3) {
      width1 = '18px';
      width2 = '18px';
      width3 = (1.8*lastNumber).toFixed(2) + 'px'
    }
    if(3 < value && value < 4) {
      width1 = '18px';
      width2 = '18px';
      width3 = '18px';
      width4 = (1.8*lastNumber).toFixed(2) + 'px'
    }
    if(4 < value && value < 5) {
      width1 = '18px';
      width2 = '18px';
      width3 = '18px';
      width4 = '18px';
      width5 = (1.8*lastNumber).toFixed(2) + 'px'
    }

    return (
      <div style={{ position: 'relative' }}>
        {
          [1,2,3,4,5].map((item,index) => (
            <span key={index} style={{position:'relative'}}>
              <img key={ index } style={bgImage} src={star}/>
              <img style={
                fontImage(index == 0 ?  width1 : index == 1 ? width2 :
                index == 2 ? width3 : index == 3 ? width4 : index == 4 ? width5 : '0')}
                src={starSelected}
              />
            </span>
          ))
        }
      </div>
    )
  }

}
