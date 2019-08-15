import React from 'react';
import { Modal,Button,message } from 'antd';
import TableInSpin from '../../../common/TableInSpin';
import { query } from '../../../framework/utils/services';


export default class SubSysModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      sysList: [], //子系统列表
      sysTotal:0,
      sysCurrent: 0,
      moduleList: [],
      selectedList: [],
    }
  }

  componentDidMount() {
    query('/api/crud/subsys/subsyses').then(({ code,data }) => {
      if (code == 200) {
        this.setState({
          sysList: data.records,
          sysTotal: data.total,
          sysCurrent: data.current,
        })
      }
    })
  }

  getModule = (data) => {
    query(`/api/crud/subsys/modules?subsysId=${data[0].id}`).then(({ code,data }) => {
      this.setState({
        moduleList: data.records
      })
    })
  }

  onSelected = (data) => {
    this.setState({
      selectedList: data
    })
  }

  onOk = () => {
    const { moduleList,selectedList } = this.state;
    if (selectedList.length == 0) {
      message.error('必须要有个子系统模块');
      return;
    }
    this.props.onSubmit(selectedList)
  }

  render() {

    const { visible } = this.props;
    const { sysList,sysTotal,sysCurrent,moduleList } = this.state;

    const modalProps = {
      title: '选择子系统模块',
      width: 900,
      visible,
      onOk:this.onOk,
      onCancel:this.props.onBack,
    };

    const sysRowSelection = {
      onChange: (selectedRowKeys,selectedRows) => {
        this.getModule(selectedRows)
      },
      type: 'radio',
    };

    const mouleRowSelection = {
      onChange: (selectedRowKeys,selectedRows) => {
        this.onSelected(selectedRows)
      }
    }

    const sysProps = {
      list: sysList,
      loading: false,
      columns: [
        {
          title: '名称',
          key: 'name',
          dataIndex: 'name'
        },
        {
          title: '价格',
          key: 'price',
          dataIndex: 'price'
        },
        {
          title: '描述',
          key: 'note',
          dataIndex: 'note'
        }
      ],
      rowSelection: sysRowSelection
    }

    const mouleProps = {
      list: moduleList,
      loading: false,
      columns: [
        {
          title: '名称',
          key: 'name',
          dataIndex: 'name'
        },
        {
          title: '价格',
          key: 'price',
          dataIndex: 'price'
        },
        {
          title: '描述',
          key: 'note',
          dataIndex: 'note'
        }
      ],
      rowSelection: mouleRowSelection
    }

    return (
      <Modal {...modalProps}>
        <div>子系统</div>
        <TableInSpin {...sysProps}/>
        {
          moduleList.length > 0 ?
          <div>
            <div style={{ marginTop: '3em'}}>相应子模块</div>
            <TableInSpin {...mouleProps}/>
          </div>
          : ''
        }
      </Modal>
    )
  }

}
