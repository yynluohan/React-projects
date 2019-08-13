import React from 'react';

export default class LeftRightItem extends React.Component {

  onClick = () => {
    const { route,id,title } = this.props.itemData
    if (route) {
      const crumbsList = [
        {
          url: '#/',
          name: '首页'
        },
        {
          name: title
        }
      ]
      //将面包屑存于session中
      sessionStorage.setItem('crumbsList',JSON.stringify(crumbsList))
      window.location.href =  '#' + route
    }
  }

  render() {

    const { status,title,subTitle,number,message,image,route } = this.props.itemData;

    const style = {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      marginBottom: '1.2em',
      cursor: 'pointer',
    }

    const statusStyle = {
      color: '#FB4C81',
      border: '1px solid #FB4C81',
      borderRadius: '2px',
      display: 'inline-block',
      fontSize: '14px',
      margin: '1em 0 0 1em',

    }

    const subTitleStyle = {
      color: '#BF9E6B',
      fontSize: '14px',
      textAlign: 'center',
      margin: '1em 0',
    }

    const titleStyle = {
      textAlign: 'center',
      fontSize: '22px',
      margin: '1em 0',
    }

    const numberStyle = {
      color: '#F7A701',
      fontSize: '18px',
      textAlign: 'center',
      margin: '0 20%',
      paddingBottom: '2em',
      borderBottom: '1px solid #f2f2f2',
    }

    const imageStyle = {
      width: '60%',
      height: '335px',
      backgroundImage:`url(${image})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }

    const messageStyle = {
      padding: '0 10%',
      marginTop:'2em',
      color: '#666',
      textAlign: 'center',
    }

    return (
      <div style={style} onClick={() => this.onClick()}>
        <div style={{width: '40%'}}>
          { status ? <div style={statusStyle}>{status}</div> : '' }
          { subTitle ? <div style={subTitleStyle}>{subTitle}</div> : ''}
          { title ? <div style={titleStyle}>{ title }</div> : '' }
          { number ? <div style={ numberStyle }>{ number }</div> : '' }
          { message ? <div style={messageStyle}>{ message }</div> : '' }
        </div>
        <div style={ imageStyle }>
        </div>
      </div>
    )
  }

}
