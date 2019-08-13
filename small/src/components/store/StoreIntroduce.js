import React from 'react';
import StarScore from '../../common/starScore/StarScore';

export default class StoreIntroduce extends React.Component {

  render() {

    const style = {
      margin: '0.8em 0 2em 0',
      backgroundColor:'#fff',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      padding: '1em'
    }

    const logoStyle = {
      width:'100px',
      height:'100px',
      backgroundImage:'url(http://bfs.biyao.com/group1/M00/03/AE/rBACYVkUkI2APfwPAAC7nzwI-NA595.jpg)',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      marginRight:'1.5em'
    }

    return(
      <div style={style}>
        <div style={{display: 'flex',alignItems:'center'}}>
          <div style={logoStyle}></div>
          <div>
            <div style={{ fontSize:'24px',marginBottom:'0.5em'}}>亓口</div>
            <div style={{color: '#ccc'}}>证书信息></div>
          </div>
        </div>
        <div style={{ fontSize:'13px'}}>
          <div style={{marginBottom:'0.5em',display:'flex',alignItems: 'center'}}>
            <span style={{ marginRight: '0.5em'}}>商品质量：</span>
            <StarScore value={3.6}/>
            <span style={{ marginLeft: '0.5em',color: '#f49f26'}}> 3.6分</span>
          </div>
          <div style={{display:'flex',alignItems: 'center'}}>
            <span style={{ marginRight: '0.5em'}}>服务态度：</span>
            <StarScore value={4.3}/>
            <span style={{ marginLeft: '0.5em',color: '#f49f26'}}> 4.3分</span>
          </div>
        </div>
      </div>
    )

  }

}
