import { connect } from 'dva';
import ProductForm from './component/ProductForm';

const ContractProductAdd = ({ dispatch,contract }) => {

  const productFormProps = {
    type:'add',
    onSave(data){
      dispatch({
        type: 'contract/addContractProduct',
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

export default connect(mapStateToProps)(ContractProductAdd)
