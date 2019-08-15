import React from 'react';
import { Checkbox,Button } from 'antd'

export default class Boxes extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: [],  //所有权限
      isSelectAll: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list != undefined) {
      if (nextProps.currentPerm != undefined) {
        let permList = nextProps.list;
        let currentPerm = nextProps.currentPerm;
        if (currentPerm.length > 0) {
          for (let i = 0; i < currentPerm.length; i++) {
            for(let j = 0; j < permList.length; j++) {
              if (currentPerm[i].groupId == permList[j].id) {
                permList[j].items.length > 0 && permList[j].items.map((item,index) => {
                  if (currentPerm[i].id == item.id) {
                    permList[j].items[index].checked = true
                  }
                })
              }
            }
          }
          permList.length > 0 && permList.map((item,index) => {
            const isAll = item.items.length > 0 && item.items.every(x => x.checked);
            if (isAll) {
              permList[index].checked = true
            } else {
              permList[index].checked = false
            }
          })
          this.isCheckAll(permList)
        }
        this.setState({
          list: permList,
        })
      } else {
        this.setState({
          list: nextProps.list,
        })
      }
    }


  }

  onSubmit = () => {
    let permIds = [];
    let { list } = this.state;
    list.length > 0 && list.map((item,index) => {
      item.items.length > 0 && item.items.map((k,i) => {
        if (k.checked) {
          permIds.push(k.id)
        }
      })
    })
    if (this.props.onOk) {
      this.props.onOk(permIds)
    }
  }

  //检测是否选择了全部
  isCheckAll = (data) => {
    const checked =  data.length > 0 && data.every(x => x.checked);
    this.setState({
      isSelectAll: checked
    })
  }

  //选择所有
  onSelectAll = (e) => {
    let { list } = this.state;
    list.length > 0 && list.map((item,index) => {
      list[index].checked = e.target.checked;
      item.items.length > 0 && item.items.map((k,i) => {
        list[index].items[i].checked = e.target.checked
      })
    })
    this.setState({
      list,
      isSelectAll: e.target.checked
    })
  }

  //单个模块全选
  onSelectModule = (e,data) => {
    let { list } = this.state;
    list.length > 0 && list.map((item,index) => {
      if (data.id == item.id) {
        list[index].checked = e.target.checked;
        item.items.length > 0 && item.items.map((k,i) => {
          list[index].items[i].checked = e.target.checked
        })
      }
    })
    this.isCheckAll(list)
    this.setState({
      list
    })
  }

  //选择单个
  onSelectSingle = (e,a,b) => {
    let { list } = this.state;
    list.length > 0 && list.map((item,index) => {
      if (a.id == b.groupId) {
        item.items.length > 0 && item.items.map((k,i) => {
          if (k.id == b.id) {
            list[index].items[i].checked = e.target.checked;
          }
        })
        const isAll = item.items.length > 0 && item.items.every(x => x.checked);
        if (isAll) {
          list[index].checked = true
        } else {
          list[index].checked = false
        }
      }
    })
    this.isCheckAll(list)
    this.setState({
      list
    })
  }

  render() {

    let { list,isSelectAll } = this.state;
    
    return (
      <div>
        <Checkbox onChange={(e) => this.onSelectAll(e)}
          checked={isSelectAll}
        /> 选择全部
        {
          list.length > 0 && list.map((item,index) => (
            <div key={index}>
              <div>
                <Checkbox
                  checked = { item.checked }
                  onChange={(e) => this.onSelectModule(e,item)}
                />
                <span style={{marginRight:'0.5em',fontWeight:700,fontSize:'15px'}}>{ item.name }</span>
              </div>
              {
                item.items && item.items.length > 0 && item.items.map((k,i) => (
                  <span key={i} style={{marginLeft: '1.8em'}}>
                    <Checkbox
                      checked={k.checked}
                      onChange={(e) => this.onSelectSingle(e,item,k)}
                    />
                    <span style={{marginRight:'0.5em'}}>{k.name}</span>
                  </span>
                ))
              }
            </div>
          ))
        }
        <div style={{textAlign: 'center',margin:'2em 0'}}>
          <Button type='primary' style={{marginRight: '1em'}} onClick={this.onSubmit}>提交</Button>
          <Button onClick={() => this.props.onBack()}>返回</Button>
        </div>
      </div>
    )
  }
}
