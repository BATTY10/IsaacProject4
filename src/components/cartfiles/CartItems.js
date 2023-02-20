import React from 'react'

const CartItems = (props) => {
    const {productImage, productName, price, id} = props.data
  return (
    <div>
      <img src={productImage} alt="" />
      <div className="description">
        <p>{productName}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default CartItems
