import React from "react";
import Header from "./header";
import Footer from "./footer";
import ProductContainer from "./Product/";
const Home = () => {
  let heading = "Product List";
  return (
    <>
      <Header title={heading}></Header>
      <ProductContainer></ProductContainer>
      <Footer message="@Copyright www.cybage.com"></Footer>
    </>
  );
};

export default Home;
