import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobaluseContext } from "../../hooks/Context";
import "../../styles/productDisplay.css";

const ProductProps = ({ image, id, title, description, price, rating }) => {
  const {addTocart, cartItems } = GlobaluseContext()
  const cartItemCount = cartItems[id]
  const navigate = useNavigate();
  return (
    <div className="product-container">
      <h2>product Id:{id}</h2>
      <img src={image} alt="display-img" />
      <div className="product-details">
        <h4>{title}</h4>
        <p>{description.slice(0, 50)}...</p>
        <div className="cart">
          <p>${price}</p>
          <button onClick={() => addTocart(id)}>Add to cart {cartItemCount > -1 && <>({cartItemCount})</>}</button>
        </div>
        <div className="ratings">
          <p>product rating:{rating.rate}</p>
          <p>Rating count is :{rating.count}</p>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/products/" + id);
        }}
      >
        More...
      </button>
    </div>
  );
};

export default ProductProps;
