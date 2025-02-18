import React from 'react'
const ShoppingCard = ({shoppingItemsList}) => {
let grandTOtal=shoppingItemsList.reduce((total,product)=>{
    return total+=product.price * product.quantity
},0)
  return (
    <div>
        <h2>🛒 Shopping Cart</h2>   
        <ul>
        {shoppingItemsList.map((product,index)=>(
            <li key={index}>
                <h3>{index+1} . {product.name} - {product.price} X {product.quantity} = {product.price*product.quantity}</h3>
            </li>
        ))}        
        </ul>
        <h3>💰 Grand Total: {grandTOtal}</h3>   
    </div>
  )
}

export default ShoppingCard
