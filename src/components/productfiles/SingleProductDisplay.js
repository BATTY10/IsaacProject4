import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobaluseContext } from "../../hooks/Context";
import { ProductList } from "./ProductsList";

const SingleProductDisplay = () => {
  const {addToCart}  = GlobaluseContext()
  const { id } = useParams();
  const single_product = ProductList[id - 1];
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => addToCart(id)}>Add to cart</button>
      <h1>{single_product.category}</h1>
      <h2>{single_product.title}</h2>
      <img src={single_product.image} alt="" />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Prev Page
      </button>
    </div>
  );
};

export default SingleProductDisplay;
