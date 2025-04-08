import React from "react";
import { Outlet, useNavigate } from "react-router";

const Products = () => {
  const navigate = useNavigate();
  const productDetailHandler = (event) => {
    navigate(`/products/${event.target.id}`);
  };
  return (
    <>
      <h1>Products</h1>
      <ul onClick={productDetailHandler}>
        <li id="1">Product 1</li>
        <li id="2">Product 2</li>
        <li id="3">Product 3</li>
      </ul>
      <Outlet />
    </>
  );
};

export default Products;
