import React from "react";
import { Outlet } from "react-router";

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <Outlet />
    </>
  );
};

export default Products;
