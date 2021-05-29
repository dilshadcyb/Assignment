import React from "react";
import "./productStyle.css";
const ProductList = (props) => {
  const { price, product_name, description, product_image } = props.prod;
  return (
    <div className="col-sm-3 mb-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product_name}</h5>
          <hr />
          <img
            src={product_image}
            className="card-img-bottom"
            alt="songs"
            style={{ height: "200px", width: "100%" }}
          />
          <p className="card-text mt-2">Price: {price}</p>
          <p className="card-text">Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
