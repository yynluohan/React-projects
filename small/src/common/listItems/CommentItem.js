import React from 'react';
import styles from '../base.css';
import arrowLeft from '../../images/slider-left.png';
import arrowRight from '../../images/slider-right.png';
import closeIcon from '../../images/close.png';

class CommentItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectIndex: -1,
    }
  }

  onClick = (index) => {
    this.setState({
      selectIndex: index
    })
  }

  updateIndex = (data) => {
    const { selectIndex } = this.state;
    this.setState({
      selectIndex: data == 'left' ? selectIndex - 1 : selectIndex + 1
    })
  }

  render() {

    const { image,imageList,name,icon,title,subTitle,color,size,message } = this.props.itemData;
    const { selectIndex } = this.state;

    const style = {
      borderBottom: '1px solid #eee',
      padding: '1em 0',
      display: 'flex',
      backgroundColor: '#fff',
      marginLeft:'2em',
    }

    const leftStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center'
    }

    const imageStyle = {
      width:'50px',
      height: '50px',
      backgroundImage:`url(${image})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderRadius: '50%',

    }

    const iconStyle = {
      width:'20px'
    }
    const nameStyle = {
      fontSize: '13px',
      margin: '0.5em 0'
    }

    const rightStyle = {
      marginLeft: '2em',
      marginRight: '0.5em',
    }

    const titleStyle = {
      fontSize: '14px',

    }

    const subTitleStyle = {
      marginRight:'1.5em'
    }

    const colorStyle = {
      marginRight:'1.5em'
    }

    const sizeStyle = {
      marginRight:'1.5em'
    }

    const imageListItem = (item,index) => {
      return {
        width:'70px',
        height:'70px',
        backgroundImage:`url(${item.url})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: '0 0.5em 0.5em 0',
        cursor:'pointer',
        border: selectIndex == index ? '4px solid #f7b200' : 'none',
      }
    }

    const messageStyle = {
      backgroundColor: '#F8F8F8',
      fontSize: '12px',
      padding: '1em',
      lineHeight: '18px',
    }

    return(
      <div style={style}>
        <div style={leftStyle}>
          <div style={imageStyle}></div>
          { name ? <div style={nameStyle}>{ name }</div> : '' }
          <img style={iconStyle} src={icon}/>
        </div>

        <div style={rightStyle}>
          { title ? <div style={titleStyle}>{title}</div> : '' }

          <div>
            <div style={{display: 'flex',flexWrap: 'wrap',margin: '1em 0px 0.5em 0'}}>
              {
                imageList && imageList.length > 0 && imageList.map((item,index) => (
                    <div key={index} style={imageListItem(item,index)} onClick={() => this.onClick(index)}></div>
                ))
              }
            </div>
            {
              selectIndex != -1 && imageList && imageList.length > 0 ?
              <div style={{ display: 'flex',alignItems: 'center'}}>
                {
                  selectIndex != 0 && selectIndex != -1 ?
                  <img src={arrowLeft} style={{cursor:'pointer'}} onClick={() => this.updateIndex('left')}/>
                  : ''
                }
                <div>
                  <img className={styles.anmationStyle} style={{margin: '0 0.5em',position:'relative'}}
                       src={imageList[selectIndex].url}
                  />
                  <img style={{position: 'absolute',width:'20px',cursor:'pointer'}} src={closeIcon}
                    onClick={() => this.setState({ selectIndex: -1})}
                  />
                </div>
                {
                  selectIndex != imageList.length - 1 ?
                  <img src={arrowRight} style={{cursor:'pointer'}} onClick={() => this.updateIndex('right')}/>
                  : ''
                }
              </div>
              :
              ''
            }
          </div>

          <div style={{margin: '0.5em 0',fontSize: '12px',color: '#bbb'}}>
            { subTitle ? <span style={subTitleStyle}>{ subTitle }</span> : '' }
            { color ? <span style={colorStyle}>{ color }</span> : '' }
            { size ? <span style={sizeStyle}>{ size }</span> : '' }
          </div>

          {
            message ?
            <div style={messageStyle}>
              <span style={{color: '#bbb'}}>[ 商家回复 ] </span>
              <span style={{ color: '#BF9E6B' }}>{ message }</span>
            </div>
            : ''
          }

        </div>
      </div>
    )
  }
}

export default CommentItem
