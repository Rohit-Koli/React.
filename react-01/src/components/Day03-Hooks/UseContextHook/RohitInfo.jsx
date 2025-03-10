import React, { useContext } from 'react'
import NameContext from './NameContext'
const RohitInfo = () => {
    let info=useContext(NameContext)
  return (
    <div>
      {info.name}<br/>
      {info.age}<br/>
      {info.qualification}
    </div>
  )
}

export default RohitInfo
