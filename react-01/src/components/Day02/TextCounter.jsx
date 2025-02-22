import React, { useState } from 'react'
const TextCounter = () => {
    const [txt,setTxt]=useState("")
  return (
    <div>
      <input type="text" value={txt} onChange={(e)=>setTxt(e.target.value)} placeholder='ENTER TEXT' />
      <p>TEXT COUNT :{txt.length}</p>
    </div>
  )
}

export default TextCounter
