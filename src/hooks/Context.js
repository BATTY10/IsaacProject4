import { createContext, useContext, useState } from "react";
import { ProductList } from "../components/productfiles/ProductsList";

export const ProductContext = createContext(null);

const getDefaultCart=()=>{
    let cart ={}
    for(let i=1; i < ProductList.length; i++) {
        cart[i] =0
    }
    return cart

}

export const ProductContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addTocart =(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
    }

    const updateCartItemCount=(newAmount, itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: newAmount}))
    }


    const contextdata ={
        cartItems, 
        addTocart,
        updateCartItemCount
    }
  return (
    <ProductContext.Provider value={contextdata}>
      {children}
    </ProductContext.Provider>
  );
};


export const GlobaluseContext =()=>{
    return useContext(ProductContext)
}
