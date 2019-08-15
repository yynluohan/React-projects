import { connect } from 'dva';
import ContractForm from './component/ContractForm';

const ContractEdit = ({ dispatch,contract }) => {

  const { item } = contract


  const fromProps = {
    item,
    type: 'update',
    onSave(data){
      dispatch({
        type: 'contract/updateContract',
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

export default connect(mapStateToProps)(ContractEdit)
