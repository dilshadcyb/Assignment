import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import AddProduct from "./components/Product/Components/add-product";
import Home from "./components";
const router = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AddProduct" component={AddProduct} />
      </Switch>
    </Router>
  );
};

export default router;
