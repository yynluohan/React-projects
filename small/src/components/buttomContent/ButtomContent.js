import React from 'react';
import styles from './buttomContent.css';

export default class ButtomContent extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={styles.container}>
        {/*<div className={styles.topStyle}>
          <div className={styles.topItemStyle} style={{ borderRight:'2px solid #bbb'}}>
            <img src={require('../../images/app_code.png')}/>
            <div>
              <div>扫码关注Small微信公众号</div>
              <div>关注Small微信公众号</div>
              <div>实时了解Small平台政策</div>
              <div>人才招聘信息</div>
            </div>
          </div>

          <div className={styles.topItemStyle}>
            <img src={require('../../images/app_code.png')}/>
            <div>
              <div>扫码下载Small APP</div>
              <div>随时随地掌握上新信息</div>
              <div>浏览、购买更便捷</div>
              <div>体验更多黑科技</div>
              <div>与Small面对面沟通</div>
            </div>
          </div>
        </div>*/}
        <div className={styles.bottomStyle}>
          <div>
            <span>《用户服务协议》</span>  |
            <span>《隐私政策》</span>
          </div>
          <div>
            Copyright © 2019 xxxxxxxxxxx  备案编号：<a href='http://www.beian.miit.gov.cn'>粤ICP备xxxxx</a>
          </div>
          {/*<div>
            营业执照 增值电信业务经营许可证 互联网药品信息服务资格证书 食品经营许可证
            （粤）网械平台备字（2018）第00007号 出版物发行业务提供服务的网络交易平台备案
          </div>*/}
          <div>
            公司地址：xxxxxxxxxxxxxxxxxxxxxxxxx 公司电话：xxxxxxxxxxx
          </div>
          {/*<div>
            Small商城提示您，产品“由某制造商出品”仅为陈述制造商既往生产经历，并不意味着相应产品与特定品牌产品相同或近似。
          </div>*/}
        </div>
      </div>
    )
  }

}
