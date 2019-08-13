import NavTypeList from '../../common/NavTypeList';
import homeImage from './../../images/home-image.png';

export default class NavImage extends React.Component {

  render() {

    const imageStyle = {
      width:'80%',
      height:'342px',
      backgroundImage:`url(${require('../../images/home-image.png')})`,
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center',
      backgroundSize:'cover',
    }

    const bottomStyle = {
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      padding: '0.8em 1em',
    }

    const bottomItemStyle = {
      display:'flex',
      alignItems:'center',
      fontSize:'14px'
    }

    const bottomIconStyle = {
      width:'25px',
      marginRight:'0.5em'
    }

    return (
      <div style={{ marginBottom:'2em',backgroundColor:'#fff'}}>
        <div style={{display:'flex'}}>
          <div style={{width:'20%',minWidth:'200px'}}>
            <NavTypeList/>
          </div>
          <div style={imageStyle}></div>
        </div>
        <div style={bottomStyle}>
          <div style={bottomItemStyle}>
            <img style={bottomIconStyle} src={require('../../images/icon_manufacturer.png')}/>
            <span>大牌制造商直供</span>
          </div>
          <div style={bottomItemStyle}>
            <img style={bottomIconStyle} src={require('../../images/icon_7days.png')}/>
            <span>七天无忧退货</span>
          </div>
          <div style={bottomItemStyle}>
            <img style={bottomIconStyle} src={require('../../images/icon_mailing_free.png')}/>
            <span>全平台包邮</span>
          </div>
        </div>
      </div>
    )
  }

}
