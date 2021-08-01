import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Product detail</h1>
      <div>{params.id}</div>
    </>
  );
};

export default ProductDetail;
