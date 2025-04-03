import React from "react";
import { Link, NavLink, Outlet } from "react-router";

const ProductDetail = () => {
  return (
    <>
      <h1>ProductsDetail</h1>
      <Link to="..">Previous</Link>
      <NavLink to="signin">Next</NavLink>
      {/* <Outlet /> */}
    </>
  );
};

export default ProductDetail;
