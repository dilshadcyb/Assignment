import { combineReducers } from "redux";
import ProductReducers from "./productreducers";
const allReducers = combineReducers({
  products: ProductReducers,
});

export default allReducers;
