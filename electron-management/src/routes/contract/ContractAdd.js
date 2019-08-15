import { connect } from 'dva';
import ContractForm from './component/ContractForm';

const ContractAdd = ({ dispatch,contract }) => {

  const fromProps = {
    title: '添加合约',
    onSave(data){
      dispatch({
        type: 'contract/addContract',
        payload:data
      })
    }
  }

  return (
    <div>
      <ContractForm {...fromProps}/>
    </div>
  )

}

function mapStateToProps(state) {
  return {
    contract: state.contract
  }
}

export default connect(mapStateToProps)(ContractAdd)
