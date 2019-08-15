import React from 'react';
import { connect } from 'dva';
import FormIemView from '../../common/FormIemView';

class ModuleDetail extends React.Component {

  render() {

    const { item } = this.props.owner;

    const formIemViewProps = {
      title: '模块持有者详情',
      list: [
        {label:'邀请码',data:item.invitationCode},
        {label:'leftNum',data:item.leftNum},
        {label:'rightNum',data:item.rightNum},
      ]
    }

    return (
      <div>
        <FormIemView {...formIemViewProps}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    owner: state.owner
  }
}

export default connect(mapStateToProps)(ModuleDetail);
