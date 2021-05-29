import Product from "../Components";
import { fetchProduct } from "../../../actions/productActions";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  debugger;
  return { products: state.products };
};
const mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    fetchProduct: () => dispatch(fetchProduct()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
