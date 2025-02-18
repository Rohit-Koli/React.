import React from 'react'

const ProductReviewComponent = ({productName,rating,review}) => {
  switch(rating){
    case 1:
        return (
            <>
            <h2>📦 {productName}</h2>
            <h2>⭐️ - {review}</h2>
            </>
        )
    case 2:
        return (
            <>
            <h2>📦 {productName}</h2>
            <h2>⭐️⭐️ - {review}</h2>
            </>
        )
    case 3:
        return (
            <>
            <h2>📦 {productName}</h2>
            <h2>⭐️⭐️⭐️ - {review}</h2>
            </>
        )    
    case 4:
        return (
            <>
            <h2>📦 {productName}</h2>
            <h2>⭐️⭐️⭐️⭐️ - {review}</h2>
            </>
        )
    case 5:
        return (
            <>
            <h2>📦 {productName}</h2>
            <h2>⭐️⭐️⭐️⭐️⭐️ - {review}</h2>
            </>
        )     
  }
}

export default ProductReviewComponent
