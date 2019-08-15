import React from 'react';
import { Button,Tree,Divider,Popconfirm,Icon } from 'antd';
import MenuModal from './MenuModal';
import TableInSpin from '../../../common/TableInSpin';
import TreeList from '../../../common/TreeList';
import MenuViewModal from './MenuViewModal';

const { TreeNode } = Tree;

export default class MenuAdd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      list: [],
      selectId: '',
      menuChild: [], //子菜单列表
      modalData: {}, // 编辑时的modal数据
      viewVisible: false,  // 查看子菜单modal
      viewData: {},  //查看子菜单modal数据
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list) {
      this.setState({
        list: nextProps.list,
      })
    }
    this.setState({
      menuChild: nextProps.menuChild || this.state.menuChild,
    })
  }

  onSubmit = (data) => {
    const { selectId } = this.state;
    data.pid = selectId;
    this.props.onAddMenu(data);
    this.setState({
      visible: false
    })
  }

  onSavePid = (id) => {
    this.setState({
      selectId: id
    })
    this.props.onQueryChild(id)
  }

  //编辑子菜单
  onEdit = (data) => {
    this.setState({
      visible: true,
      modalData: data
    })
  }

  // 查看子菜单
  onView = (data) => {
    this.setState({
      viewVisible: true,
      viewData: data
    })
  }

  render() {

    const { visible,list,selectId,menuChild,modalData,viewVisible,viewData } = this.state;

    const modalProps = {
      visible,
      onBack: () => this.setState({ visible: false }),
      onSubmit:this.onSubmit,
      item: modalData
    }

    const tableProps = {
      list: menuChild,
      loading: false,
      columns:[
        {
          title: '名称',
          key: 'name',
          dataIndex: 'name',
        },
        {
          title: '排序号',
          key: 'sortNum',
          dataIndex: 'sortNum',
        },
        {
          title: '是否启用',
          key: 'enabled',
          render:(record) => (
            <span>{record.enabled == 1 ? '启用' : '禁用'}</span>
          )
        },
        {
          title: '是否隐藏',
          key: 'invisible',
          render:(record) => (
            <span>{record.invisible == 0 ? '显示' : '隐藏'}</span>
          )
        },
        {
          title: '备注',
          key: 'remarks',
          dataIndex: 'remarks',
        },
        {
          title: '操作',
          key: 'operate',
          render: (record) => (
            <span>
              <a onClick={() => this.onView(record)}>查看</a>
              <Divider type="vertical" />
              <a onClick={() => this.onEdit(record)}>编辑</a>
              <Divider type="vertical" />
              <Popconfirm
                title="Are you sure？"
                icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                onConfirm = {() => this.props.onDelete(record)}
              >
                <a>删除</a>
              </Popconfirm>
            </span>
          )
        }
      ]
    }

    const treeListProps = {
      list,
      onSelectId: this.onSavePid,
    }

    const viewModalProps = {
      item: viewData,
      visible: viewVisible,
      onBack: () => this.setState({ viewVisible: false })
    }

    return (
      <div style={{ padding: '20px',minHeight: 'calc(100vh - 150px)'}}>
        <h1>菜单配置</h1>
        { visible ? <MenuModal {...modalProps}/> : '' }
        <div style={{display: 'flex',}}>
          <div style={{ maxWidth: '40%'}}>
            <TreeList {...treeListProps}/>
          </div>
          {
            selectId ?
            <div style={{ flex: 1,marginLeft:'2em'}}>
              <Button type='primary' onClick={() => this.setState({ visible: true })} style={{ marginBottom: '1em'}}>添加</Button>
              <TableInSpin {...tableProps}/>
            </div>
            : ''
          }
        </div>
        { viewVisible ? <MenuViewModal {...viewModalProps}/> : '' }
      </div>
    )
  }

}
