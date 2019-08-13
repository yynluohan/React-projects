import React from 'react';
import styles from '../base.css';

class LineColumnItem extends React.Component {

  onClick = () => {
    const { route } = this.props.itemData;
    if (route) {
      const crumbsList = [
        {
          url: '#/',
          name: '首页'
        },
        {
          name: '亓口'
        }
      ]
      //将面包屑存于session中
      sessionStorage.setItem('crumbsList',JSON.stringify(crumbsList))
      window.location.href = '#' + route
      // history.go(route)
    }
  }

  render() {

    const { image,title,subTitle,number,tagName,message,status,route } = this.props.itemData;

    const style = {
      padding: '1em 0',
      borderBottom:'1px solid #dcd1d1',
      cursor:'pointer',
      ...this.props.style
    }

    const iamgeStyle = {
      width:'100%',
      transition: 'transform .5s ease-in-out 0s',
    }

    const subTitleStyle = {
      margin:'0.5em 0',
      fontSize:'14px'
    }

    const titleStyle = {
      fontSize:'15px',
    }

    const numberStyle = {
      fontSize:'18px',
      marginRight:'0.6em'
    }

    const tagNameStyle = {
      border: '1px solid #FB4C81',
      color: '#FB4C81',
      fontSize:'12px',
      borderRadius:'2px',
      padding:'0 3px'
    }

    const messageStyle = {
      fontSize: '12px',
      color: '#ccc',
    }

    const statusStyle = {
      fontSize:'12px',
      color: '#fff',
      background: '#AB7FD1',
      borderColor: '#AB7FD1',
      marginRight:'0.6em',
      padding: '0 0.3em',
      borderRadius: '3px',
    }

    return(
      <div style={style} onClick={() => this.onClick()}>
        { image ?
          <div style={{width:'100%',overflow:'hidden'}}>
            <img style={iamgeStyle} className={styles.scaleStyle} src={image}/>
          </div>
          : ''
        }
        { subTitle ? <div className={styles.subTitleColor} style={subTitleStyle}>{ subTitle }</div> : '' }
        { title ? <div style={titleStyle}>{ title }</div> : '' }
        <div style={{margin: '0.5em 0',display:'flex',alignItems:'center'}}>
          { number ? <span className={styles.numberColor} style={numberStyle}>{number}</span> : '' }
          { status ? <span style={statusStyle}>{status}</span> : '' }
          { tagName ? <span style={tagNameStyle}>{ tagName }</span> : '' }
        </div>
        { message ? <div style={messageStyle}>{message}</div> : '' }
      </div>
    )
  }
}

export default LineColumnItem
