import React, { useContext } from 'react'
import ItemPortal from './ItemPortal'
const Kitchen = () => {
    let item=useContext(ItemPortal)
  return (
    <div>
      {item.food}
    </div>
  )
}

export default Kitchen
