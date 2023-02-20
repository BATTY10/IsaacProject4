import React from "react";
import ProductProps from "./ProductProps";
import { ProductList } from "./ProductsList";

const mapList = (itr, index, id) => {
  return <ProductProps key={index} id={id} {...itr} />;
};

const ProductDisplay = () => {
  return (
    <div>
      <h1>The Items Available in Our Store</h1>
      <div className="wrapper">{ProductList.map(mapList)}</div>
    </div>
  );
};

export default ProductDisplay;
