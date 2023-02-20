import React from "react";
import { GlobaluseContext } from "../hooks/Context";
import { ProductList } from "../components/productfiles/ProductsList";
import CartItems from "../components/cartfiles/CartItems";

const Cart = () => {
  const { cartItems } = GlobaluseContext();
  console.log(cartItems);
  return (
    <div>
      <h1>Your Cart items</h1>
      <div>{ProductList.map((product)=>{
        if(cartItems[product.id] !== 0){
          return <CartItems data={product}/>
        }
      })}</div>
    </div>
  );
};

export default Cart;
