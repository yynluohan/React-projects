import React from 'react';
import BreadCrumbs from '../common/BreadCrumbs';
import CommonList from '../common/listItems/CommonList';
import LineColumnItem from '../common/listItems/LineColumnItem';
import CategoryList from '../components/goodCategory/CategoryList';
import TopFloatHome from '../components/nav/TopFloatHome';
import ButtomContent from '../components/buttomContent/ButtomContent';
import FixedArrow from '../common/FixedArrow';
import Nav from '../components/nav/Nav';

export default class GoodCategory extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      scrollHeight:0
    }
  }

  componentDidMount() {
    // document.body.scrollTop = document.documentElement.scrollTop = 0
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

    const { scrollHeight } = this.state;

    const item = {
      title: '拉架棉彩色圈圈绣花T恤',
      subTitle: 'Givenchy制造商直供',
      number: '￥179',
      tagName: '一起拼',
      message: '5120条好评',
      status: '精选',
      route: '/productDetail'
    }

    const data = [
      {
        type:'POLO衫',
        list:[
          {
            image:'http://bfs.biyao.com/group1/M00/EE/4A/rBACW1z435GAQlp0AACaoD9PuXY426.jpg',
            ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/21/80/rBACYVoBYYaAC8lcAACOUP7I9YM672.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/A8/9D/rBACW1yHhVmAb_n4AACUrdv9kxs563.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/DC/90/rBACVFzkvpCAFXVSAACOf4IXN7g587.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/EB/47/rBACYVz0ub6AcK1BAAB4jwQ_lxU823.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/DD/67/rBACW1zjk8OAOt0IAACWZZW44Ag105.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/A8/9D/rBACW1yHhVmAb_n4AACUrdv9kxs563.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/DC/90/rBACVFzkvpCAFXVSAACOf4IXN7g587.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/EB/47/rBACYVz0ub6AcK1BAAB4jwQ_lxU823.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/DD/67/rBACW1zjk8OAOt0IAACWZZW44Ag105.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/DD/67/rBACW1zjk8OAOt0IAACWZZW44Ag105.jpg',
              ...item
          },
        ]
      },

      {
        type:'T恤',
        list:[
          {
            image:'http://bfs.biyao.com/group1/M00/ED/1E/rBACW1z3TrOAfgw6AAB2KbBBPY4233.jpg',
            ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/AD/34/rBACW1yR19eAFU7eAACQLl9BpwM401.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/2E/75/rBACVFqnZ9CAAiw4AAB2qFZzlKg230.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/F2/12/rBACW1z_NtOAMRZrAACISlr9UbA239.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/EB/47/rBACYVz0ub6AcK1BAAB4jwQ_lxU823.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/DD/67/rBACW1zjk8OAOt0IAACWZZW44Ag105.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/EB/47/rBACYVz0ub6AcK1BAAB4jwQ_lxU823.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/DD/67/rBACW1zjk8OAOt0IAACWZZW44Ag105.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/EB/47/rBACYVz0ub6AcK1BAAB4jwQ_lxU823.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/DD/67/rBACW1zjk8OAOt0IAACWZZW44Ag105.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/EB/47/rBACYVz0ub6AcK1BAAB4jwQ_lxU823.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/DD/67/rBACW1zjk8OAOt0IAACWZZW44Ag105.jpg',
              ...item
          },
        ]
      },
      {
        type:'衬衫',
        list:[
          {
            image:'http://bfs.biyao.com/group1/M00/51/8C/rBACVFuIqPuAXBNLAABQszzgqCE729.jpg',
            ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/E6/A9/rBACVFzw3W6AYPoRAACLqVSyzf4542.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/CC/01/rBACVFzP6peAWhq5AAB2IRb93tw607.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/F2/12/rBACW1z_NtOAMRZrAACISlr9UbA239.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/44/43/rBACVFtRb5qAGQmAAAB3XEwoU5M799.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/DD/67/rBACW1zjk8OAOt0IAACWZZW44Ag105.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/44/43/rBACVFtRb5qAGQmAAAB3XEwoU5M799.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/DD/67/rBACW1zjk8OAOt0IAACWZZW44Ag105.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/44/43/rBACVFtRb5qAGQmAAAB3XEwoU5M799.jpg',
              ...item
          },
          {
            image:'http://bfs.biyao.com/group1/M00/DD/67/rBACW1zjk8OAOt0IAACWZZW44Ag105.jpg',
              ...item
          },
        ]
      }
    ]

    const categoryListProps = {
      typeList: [{name:'男士内搭',id:'1'},{name:'男士下装',id:'2'},{name:'男士外套',id:'3'}],
      data,
    }

    const fixedArrowProps = {
      height: scrollHeight
    }

    const navProps = {
      getScrollHeight:this.getScrollHeight
    }

    return(

      <div>
        <Nav {...navProps}>
          <TopFloatHome/>
        </Nav>
        <div style={{padding:'0 10%'}}>
          <BreadCrumbs/>
          <CategoryList {...categoryListProps}/>
        </div>
        <ButtomContent />
        <FixedArrow {...fixedArrowProps}/>
      </div>
    )

  }

}
