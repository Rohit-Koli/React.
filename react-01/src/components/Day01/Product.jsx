import React from 'react'

const Product = ({name,price,inStock}) => {
  return !inStock ? <h2>🔴 {name} is Out of Stock</h2> : <h2>🟢 {name} is Available</h2>
}

export default Product
