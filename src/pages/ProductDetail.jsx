import React from "react";
import { Link, useParams } from "react-router";

const ProductDetail = () => {
  let params = useParams();
  return (
    <>
      <h1>Product Detail of {params.id} </h1>
      <Link to=".." relative="path">
        Previous
      </Link>
    </>
  );
};

export default ProductDetail;
