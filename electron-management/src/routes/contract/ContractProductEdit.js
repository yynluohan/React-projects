import { connect } from 'dva';
import ProductForm from './component/ProductForm';

const ContractProductEdit = ({ dispatch,contract }) => {

  const { item } = contract;

  const productFormProps = {
    item,
    type: 'update',
    onSave(data){
      dispatch({
        type: 'contract/updateContractProduct',
        payload:data
      })
    }
  }

  return (
    <div>
      <ProductForm {...productFormProps}/>
    </div>
  )

}

function mapStateToProps(state) {
  return {
    contract: state.contract
  }
}

export default connect(mapStateToProps)(ContractProductEdit)
