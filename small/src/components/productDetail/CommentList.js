import React from 'react';
import RadioButtton from '../../common/RadioButtton';
import CommentItem from '../../common/listItems/CommentItem';
import CommonList from '../../common/listItems/CommonList';

export default class CommentList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectIndex: 0
    }
  }

  render() {

    const { selectIndex } = this.state;

    const radioButtonProps = {
      list:[{name:'全部'},{name:'有图'}],
      onSelect:(index) => this.setState({selectIndex:index })
    }

    let commentList1 = [
      {
        image: 'http://bfs.biyao.com/group1/M00/CE/AC/rBACW1zRGzOADOvaAAO_734EBWE512_150x150.jpg',
        title:'穿着舒适，尺寸合适，必要从来没有让我失望过！',
        name: '戴***豆',
        icon: 'http://static1.biyao.com/pc/www/img/new_master/icon_v2.png?v=biyao_723f0db',
        subTitle: '2019-06-03 00:23',
        color: '黑色',
        size: 'L',
        imageList:[
          {
            url:'http://bfs.biyao.com/group1/M00/EE/57/rBACW1z48CyAPm14AAS1YNnWj-w210_128x128.jpg',
          },{
            url: 'http://bfs.biyao.com/group1/M00/EE/57/rBACYVz48FWAYFieAAVR86qyKe4014_128x128.jpg'
          }
        ],
        message: '亲们的支持是我们成长发展的基石、提供优质服务的动力，我们承诺会以更快更好的服务回馈我们的顾客\
                 ，也期待着您在将来为我们的发展提出宝贵意见。谢谢亲的支持。'
      },
      {
        image: 'http://bfs.biyao.com/group1/M00/CE/AC/rBACW1zRGzOADOvaAAO_734EBWE512_150x150.jpg',
        title:'第一次在必要买东西，看评价口碑不错，还没用，不知道效果怎么样，希望有效果，用完再来。\
               先说商品质量：产品总体不错，包装严实。再说商家服务：点赞啦。最后点评快递：发货很快。\
               其他就是感谢店家打折送券活动，毕竟便宜好货更实在。希望店家多多优惠，及时通知老客户，促成回购。',
        name: '戴***豆',
        icon: 'http://static1.biyao.com/pc/www/img/new_master/icon_v2.png?v=biyao_723f0db',
        subTitle: '2019-06-03 00:23',
        color: '品名: 赋妍明眸眼霜',
        size: '规格: 25g'
      },
      {
        image: 'http://bfs.biyao.com/group1/M00/CE/AC/rBACW1zRGzOADOvaAAO_734EBWE512_150x150.jpg',
        title:'穿着舒适，尺寸合适，必要从来没有让我失望过！',
        name: '戴***豆',
        icon: 'http://static1.biyao.com/pc/www/img/new_master/icon_v2.png?v=biyao_723f0db',
        subTitle: '2019-06-03 00:23',
        color: '品名: 赋妍明眸眼霜',
        size: '规格: 25g'
      }
    ]

    const commentList2 = [
      {
        image: 'http://bfs.biyao.com/group1/M00/CE/AC/rBACW1zRGzOADOvaAAO_734EBWE512_150x150.jpg',
        title:'穿着舒适，尺寸合适，必要从来没有让我失望过！',
        name: '戴***豆',
        icon: 'http://static1.biyao.com/pc/www/img/new_master/icon_v2.png?v=biyao_723f0db',
        subTitle: '2019-06-03 00:23',
        color: '黑色',
        size: 'L',
        imageList:[
          {
            url:'http://bfs.biyao.com/group1/M00/EE/57/rBACW1z48CyAPm14AAS1YNnWj-w210_128x128.jpg',
          },{
            url: 'http://bfs.biyao.com/group1/M00/EE/57/rBACYVz48FWAYFieAAVR86qyKe4014_128x128.jpg'
          }
        ],
        message: '亲们的支持是我们成长发展的基石、提供优质服务的动力，我们承诺会以更快更好的服务回馈我们的顾客\
                 ，也期待着您在将来为我们的发展提出宝贵意见。谢谢亲的支持。'
      },
      {
        image: 'http://bfs.biyao.com/group1/M00/E8/96/rBACYVzw_IyAAjC-AAWn-MLnaD4390_150x150.jpg',
        title:'穿着舒适，尺寸合适，必要从来没有让我失望过！',
        name: '戴***豆',
        icon: 'http://static1.biyao.com/pc/www/img/new_master/icon_v2.png?v=biyao_723f0db',
        subTitle: '2019-06-03 00:23',
        color: '黑色',
        size: 'L',
        imageList:[
          {
            url:'http://bfs.biyao.com/group1/M00/ED/40/rBACW1z3a8uAXXgQAAYwpm8YgNA461_128x128.jpg',
          },{
            url: 'http://bfs.biyao.com/group1/M00/EE/57/rBACYVz48FWAYFieAAVR86qyKe4014_128x128.jpg'
          },
          {
            url:'http://bfs.biyao.com/group1/M00/EB/EB/rBACYVz1wkmAYt9pAAMFVdFo8C0923_128x128.jpg',
          },{
            url: 'http://bfs.biyao.com/group1/M00/EB/0D/rBACW1z0iHGAVUfaAARy6ws1xC4627_128x128.jpg'
          }
        ],
        message: '亲们的支持是我们成长发展的基石、提供优质服务的动力，我们承诺会以更快更好的服务回馈我们的顾客\
                 ，也期待着您在将来为我们的发展提出宝贵意见。谢谢亲的支持。'
      },
    ]

    const listProps1 = {
      loadmore: false,
      list:[].concat(commentList1,commentList1,commentList1,commentList1,commentList1,commentList1,commentList1,commentList1)
    }

    const listProps2 = {
      loadmore: false,
      list: [].concat(commentList2,commentList2,commentList2,commentList2,commentList2,commentList2,commentList2,commentList2,commentList2,commentList2)
    }

    console.log('KKKKK ==============',selectIndex);

    return (
      <div>
        <div style={{padding: '2.5em 0 2.5em 2.5em',display: 'flex',justifyContent: 'space-between',fontSize:'14px'}}>
          <RadioButtton {...radioButtonProps}/>
          <div>商品满意度：4.9分</div>
        </div>
        <div style={{backgroundColor: '#fff'}}>
          {
            selectIndex == 0 ?
            <CommonList {...listProps1}>
              <CommentItem />
            </CommonList>
            :
            ''
          }
          {
            selectIndex == 1 ?
            <CommonList {...listProps2}>
              <CommentItem />
            </CommonList>
            : ''
          }
        </div>
      </div>
    )

  }

}
