import React from 'react';
import { Modal,Button } from 'antd';
import FormIemView from '../../../common/FormIemView';

 export default class MenuViewModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: props.item || {},
    }
  }

  render() {

    const { visible } = this.props;
    const { item } = this.state;

    const formIemViewProps = {
      isHiddenBackBut: true,
      list: [
        {label:'名称',data: item.name},
        {label:'排序号',data:item.sortNum},
        {label:'图标',data: item.icon},
        {label:'图标地址',data:item.url},
        {label:'是否隐藏',data:item.invisible == '0' ? '显示' : '隐藏'},
        {label:'是否启用',data:item.enabled == '1' ? '启用' : '禁用'},
        {label:'创建时间',data: item.createdTime},
        {label:'更新时间',data:item.updatedTime},
        {label:'权限',data: item.permGroupName},
        {label:'备注',data:item.remarks},
      ]
    }

    return (
      <Modal
          title= '查看子菜单'
          width = '900px'
          visible
          onCancel={() => this.props.onBack()}
          footer = {<Button type='primary' onClick={() => this.props.onBack()}>返回</Button>}
        >
          <FormIemView {...formIemViewProps}/>
        </Modal>
    )
  }
}
