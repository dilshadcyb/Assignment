import React, { useEffect, useState } from "react";
import "./productStyle.css";
import ProductList from "./productList";
import $ from "jquery";
import { Form } from "react-bootstrap";
import { Wrapper, LinkButton } from "../../styleSheet";

const Product = (props) => {
  const [prodList] = useState(props.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [prodPerPage, setProdPerPage] = useState(8);
  const [upperPageBound, setUpperPageBound] = useState(3);
  const [lowerPageBound, setLowerPageBound] = useState(0);
  const [isPrevBtnActive, setIsPrevBtnActive] = useState("disabled");
  const [isNextBtnActive, setIsNextBtnActive] = useState("");
  const [pageBound] = useState(3);

  useEffect(() => {
    $("ul li.active").removeClass("active");
    $("ul li#" + currentPage).addClass("active");
  });

  const handleClick = (event) => {
    let listid = Number(event.target.id);
    setCurrentPage(listid);
    $("ul li.active").removeClass("active");
    $("ul li#" + listid).addClass("active");
    setPrevAndNextBtnClass(listid);
  };
  const setPrevAndNextBtnClass = (listid) => {
    let totalPage = Math.ceil(prodList.products.length / prodPerPage);
    setIsNextBtnActive("disabled");
    setIsPrevBtnActive("disabled");
    if (totalPage === listid && totalPage > 1) {
      setIsPrevBtnActive("");
    } else if (listid === 1 && totalPage > 1) {
      setIsNextBtnActive("");
    } else if (totalPage > 1) {
      setIsNextBtnActive("");
      setIsPrevBtnActive("");
    }
  };
  const btnIncrementClick = () => {
    setUpperPageBound(upperPageBound + pageBound);
    setLowerPageBound(lowerPageBound + pageBound);
    let listid = upperPageBound + 1;
    setCurrentPage(listid);
    setPrevAndNextBtnClass(listid);
  };
  const btnDecrementClick = () => {
    setUpperPageBound(upperPageBound - pageBound);
    setLowerPageBound(lowerPageBound - pageBound);
    let listid = upperPageBound - pageBound;
    setCurrentPage(listid);
    setPrevAndNextBtnClass(listid);
  };
  const btnPrevClick = () => {
    if ((currentPage - 1) % pageBound === 0) {
      setUpperPageBound(upperPageBound - pageBound);
      setLowerPageBound(lowerPageBound - pageBound);
    }
    let listid = currentPage - 1;
    setCurrentPage(listid);
    setPrevAndNextBtnClass(listid);
  };
  const btnNextClick = () => {
    if (currentPage + 1 > upperPageBound) {
      setUpperPageBound(upperPageBound + pageBound);
      setLowerPageBound(lowerPageBound + pageBound);
    }
    let listid = currentPage + 1;
    setCurrentPage(listid);
    setPrevAndNextBtnClass(listid);
  };
  const handleInputChange = (e) => {
    setProdPerPage(e.target.value);
  };

  const indexOfLastTodo = currentPage * prodPerPage;
  const indexOfFirstTodo = indexOfLastTodo - prodPerPage;

  const currentprod = prodList.products.slice(
    indexOfFirstTodo,
    indexOfLastTodo
  );

  const renderprod = currentprod.map((pro, index) => {
    return <ProductList key={index} prod={pro}></ProductList>;
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(prodList.products.length / prodPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageNumbersFilter = [];
  for (let i = 1; i <= Math.ceil(prodList.products.length); i++) {
    pageNumbersFilter.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number === 1 && currentPage === 1) {
      return (
        <li key={number} className="active" id={number}>
          <LinkButton id={number} onClick={handleClick}>
            {number}
          </LinkButton>
        </li>
      );
    } else if (number < upperPageBound + 1 && number > lowerPageBound) {
      return (
        <li key={number} id={number}>
          <LinkButton id={number} onClick={handleClick}>
            {number}
          </LinkButton>
        </li>
      );
    }
    return null;
  });
  let pageIncrementBtn = null;
  if (pageNumbers.length > upperPageBound) {
    pageIncrementBtn = (
      <li className="">
        <LinkButton onClick={btnIncrementClick}>&hellip;</LinkButton>
      </li>
    );
  }
  let pageDecrementBtn = null;
  if (lowerPageBound >= 1) {
    pageDecrementBtn = (
      <li className="">
        <LinkButton onClick={btnDecrementClick}>&hellip;</LinkButton>
      </li>
    );
  }
  let renderPrevBtn = null;
  isPrevBtnActive === "disabled"
    ? (renderPrevBtn = (
        <li className={isPrevBtnActive}>
          <span id="btnPrev"> Previous page </span>
        </li>
      ))
    : (renderPrevBtn = (
        <li className={isPrevBtnActive}>
          <LinkButton id="btnPrev" onClick={btnPrevClick}>
            Previous page
          </LinkButton>
        </li>
      ));

  let renderNextBtn = null;
  isNextBtnActive === "disabled"
    ? (renderNextBtn = (
        <li className={isNextBtnActive}>
          <span id="btnNext"> Next page </span>
        </li>
      ))
    : (renderNextBtn = (
        <li className={isNextBtnActive}>
          <LinkButton id="btnNext" onClick={btnNextClick}>
            Next page
          </LinkButton>
        </li>
      ));

  return (
    <Wrapper>
      <div className="row ">
        <div className="col-sm-10 ">
          <h5 style={{ color: "#454545" }}>All Products</h5>
          <div className="mb-3" style={{ color: "gray" }}>
            {prodList.products.length} Products
          </div>
        </div>
        <div className="col-sm-2 ">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>
              <small>Display Per Page</small>
            </Form.Label>
            <Form.Control
              as="select"
              name="prodPerPage"
              size="sm"
              value={prodPerPage}
              onChange={handleInputChange}
            >
              {pageNumbersFilter.map((p, index) => {
                return <option key={index}>{p}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <div
            className="justify-content-end"
            style={{ width: "100%", textAlign: "right" }}
          >
            {prodPerPage} Per Page
          </div>
        </div>
      </div>

      <div className="row ">{renderprod}</div>
      <div>
        <ul className="pagination justify-content-end">
          {renderPrevBtn}
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          {renderNextBtn}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Product;
