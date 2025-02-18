import React from 'react'

const MovieRatingComponent = ({movieName,rating,genre}) => {
  if(rating>8){
    return(
        <>
        <h2>🎬 {movieName} - {rating}/10 ({genre}) 🔥 Highly Rated</h2>
        </>
    )
  }else{
    return(
        <>
        <h2>🎬 {movieName} - {rating}/10 ({genre}) </h2>
        </>
    )
  }
}

export default MovieRatingComponent
