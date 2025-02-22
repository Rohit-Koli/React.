import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0) //Initial Value of count
  return (
    <div>
      <h3>Count : {count}</h3>
      <h3><button type="button" onClick={()=> setCount(count+1)}>Increment</button></h3>
      <h3><button type="button" onClick={()=> setCount(count-1)}>Decrement</button></h3>
      <h3><button type="button" onClick={()=> setCount(count*2)}>Double</button></h3>
      <h3><button type="button" onClick={()=> setCount(count*3)}>Triple</button></h3>
    </div>
  )
}

export default Counter
