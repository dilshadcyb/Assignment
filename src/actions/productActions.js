import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./productType";
import { getProductData } from "../Services/apiServices";
export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductSuccess = (data) => {
  debugger;
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchProduct = () => {
  debugger;
  return (dispatch) => {
    dispatch(fetchProductSuccess(getProductData));
  };
};
