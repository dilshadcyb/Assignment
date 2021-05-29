import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "../actions/productType";
import { data } from "../../src/products-Data";
const initialState = {
  loading: false,
  products: data,
  error: "",
};

const Productreducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        products: [],
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default Productreducers;
