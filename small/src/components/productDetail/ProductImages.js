import React from 'react';
import ImagesWall from '../../common/ImagesWall';
import styles from '../style.css';
import Tag from '../../common/Tag';
import MallTips from '../../common/MallTips';

export default class ProductImages extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: props.list || []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list && nextProps.list.length > 0) {
      this.setState({
        list: nextProps.list
      })
    }
  }

  render() {

    const { list } = this.state;

    const imagesWallProps = {
      list,
    }

    const colorProps = {
      list:['灰色','白色','黑色']
    }

    const sizeProps = {
      list:['S','M','L','XL','XXL']
    }

    const style = {
      display: 'flex',
      justifyContent:'space-between',
    }

    const baseStyle = (obj) =>  {
      return {
        fontSize:'14px',
        ...obj
      }
    }

    const bugButtomStyle = {
      backgroundColor:'#523669',
      display:'inline-block',
      color:'#fff',
      cursor:'pointer',
      padding:'0.7em 2em',
      borderRadius:'2px',
      marginLeft:'3.5em',
      marginTop:'1em'
    }

    return (
      <div>
        <div style={style}>
          <div style={{width:'50%'}}>
            <ImagesWall {...imagesWallProps}/>
          </div>
          <div style={{width:'45%'}}>
            <div style={baseStyle({ fontSize:'20px' })}>清爽亚麻色织 板司呢短裤</div>
            <div style={baseStyle({fontSize:'12px',color:'#999',margin:'1em 0'})}>
                取材进口亚麻，凉爽透气性强，肌理清晰,地中海风格设计;
            </div>
            <div style={baseStyle({
              color:'#BF9E6B',
              backgroundColor:'#F7F1E8',
              padding:'0 0.8em',
              fontSize:'12px',
              display:'inline-block'
            })}>
              Zegna面料制造商直供
            </div>
            <div style={baseStyle({
              width:'100%',
              height:'1px',
              backgroundColor:'#ccc',
              marginTop:'0.5em'
            })}></div>
            <div style={baseStyle({
              margin:'1.5em 0',display:'flex',alignItems:'center'
            })}>
              <span className={styles.grayColor} style={baseStyle()}>售价</span>
              <span className={styles.grayColor} style={{margin:'0 1em',color:'red',fontSize:'28px'}}>￥299</span>
              <span className={styles.grayColor} style={baseStyle()}>生产周期：15天</span>
            </div>
            <div style={{margin:'1.5em 0',display:'flex',alignItems:'center'}}>
              <span className={styles.grayColor} style={baseStyle({marginRight:'2em'})}>颜色</span>
              <Tag {...colorProps}/>
            </div>
            <div style={{margin:'1.5em 0',display:'flex',alignItems:'center'}}>
              <span className={styles.grayColor} style={baseStyle({marginRight:'2em'})}>尺寸</span>
              <Tag {...sizeProps}/>
            </div>
            <div style={bugButtomStyle}>微信扫码购买</div>
          </div>
        </div>
        <MallTips />
      </div>

    )
  }

}
