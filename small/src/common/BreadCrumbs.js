import React from 'react';
import styles from './base.css';

export default class BreadCrumbs extends React.Component {

  onClick = (data) => {
    if (data.url) {
      window.location.href = data.url;
    }
  }

  render() {

    const list = sessionStorage.crumbsList ? JSON.parse(sessionStorage.crumbsList) : []

    const breadNameStyle = {
      fontSize:'13px'
    }

    return (
      <div style={{padding: '1em 0'}}>
        {
          list.length > 0 && list.map((item,index) => (
            <span key={index} className={styles.breadColor} style={breadNameStyle}>
              {
                index != list.length - 1 ?
                <span onClick={() => this.onClick(item)} style={{ cursor:'pointer' }}>{item.name}</span>
                :
                <span>{item.name}</span>
              }
              {
                index != list.length - 1 ?
                <span style={{margin:'0 0.3em'}}> > </span>
                : ''
              }
            </span>
          ))
        }
      </div>
    )
  }
}
