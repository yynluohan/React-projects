import ProductDesItem from '../common/listItems/ProductDesItem';
import Nav from '../components/nav/Nav';
import TopFloatHome from '../components/nav/TopFloatHome';
import NavImage from '../components/home/NavImage';
import ButtomContent from '../components/buttomContent/ButtomContent';
import FixedArrow from '../common/FixedArrow';
import { ScalableList } from 'list-productization'

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      scrollHeight:0
    }
  }

  componentDidMount() {
    // document.documentElement.scrollTop = 0
    window.onbeforeunload = function() {
      var n = window.event.screenX - window.screenLeft;
      var b = n > document.documentElement.scrollWidth - 20;
      if(b && window.event.clientY < 0 || window.event.altKey){
          alert("这是一个关闭操作而非刷新");
      }else{
          // alert("这是一个刷新操作而非关闭");
          document.documentElement.scrollTop = document.body.scrollTop = 0
      }
     }
  }

  getScrollHeight = (data) => {
    this.setState({
      scrollHeight: data
    })
  }

  render() {

    console.log('555');


    const { scrollHeight } = this.state;

    const item = {
      subTitle:'Givenchy制造商直供',
      title:'美国棉平纹基础POLO衫5色',
      number:'￥189',
      label:'精选',
      status:'一起拼',
      commentNumber:'223条好评'
    }

    const list = [
      {
        image:'http://bfs.biyao.com/group1/M00/BD/EA/rBACVFy36A2AZd2ZAAIS5hbYDHk595.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/E6/C0/rBACW1zvPQ6AbasOAADmi4B7kuE082.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/D0/36/rBACVFzU7dyABCkgAAGHo5aeQ4U272.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/D0/70/rBACVFzVHdKAS-XxAAJD3Ua2ojI572.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/1A/10/rBACW1mRPxiAdWwUAAC_xY0lIFY914.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/55/ED/rBACYVuRAHeAep6HAAFY8nCFVYk257.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/19/AB/rBACYVmMFXyAMtF-AACvqqQ_pL0633.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/AC/30/rBACW1yPT2WAFr16AAED9iGQp3c018.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/37/AF/rBACVFr-jl6AUTO6AAF1X_LTpu8209.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/1B/2A/rBACYVmfzGGAah-BAADAN3n6Vgc852.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/B4/AD/rBACW1ykhQyAOgZaAAJQzrU6tgQ612.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/E7/31/rBACYVzviBeAdB8vAAI_qPhFuXA985.jpg',
        ...item
      },
      {
        image:'http://bfs.biyao.com/group1/M00/1B/2A/rBACYVmfzGGAah-BAADAN3n6Vgc852.jpg',
        ...item
      },
    ]

    const productProps = {
      // API:'/api/vip/accounts',
      // API:'https://www.muaskin.com/api/pub/website/info?type=FASHION',
      list:list.concat(list,list,list,list,list,list),
      loadmore:false,
      style:{
        display: 'flex',
        flexWrap: 'wrap',
        margin:'0 auto',
      },
      itemStyle:{
        width:'50%',
        display:'flex',
        // justifyContent: 'space-between',
        justifyContent: 'center'
      },
      gateWayData:{
        'image':'avatar',
        'subTitle':'account',
        'title':'vipName',
        'number': 'credit',
        'label': 'grade',
        'status': 'id',
        'commentNumber': 'followedStoreCode'
      },
      // gateWayData:{
      //   // 'image':'avatar',
      //   'subTitle':'updateTime',
      //   'title':'title',
      //   'number': 'visitCount',
      //   'label': 'type',
      //   'status': 'status',
      //   'commentNumber': 'id'
      // }
    }

    const navProps = {
      getScrollHeight:this.getScrollHeight
    }

    const fixedArrowProps = {
      height: scrollHeight,
    }

    return (
      <div>
        <Nav {...navProps}>
          <TopFloatHome/>
        </Nav>
        <div style={{ padding:'0 10%' }}>
          <NavImage/>
          <ScalableList {...productProps}>
            <ProductDesItem />
          </ScalableList>
        </div>
        <ButtomContent />
        <FixedArrow {...fixedArrowProps}/>
      </div>
    )
  }
}


export default Home
