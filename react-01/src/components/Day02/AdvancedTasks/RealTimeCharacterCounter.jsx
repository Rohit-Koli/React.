import React, { useState } from 'react'

const RealTimeCharacterCounter = () => {
    const[text,setText]=useState("")
    function countRemaningChars(e){
        setText(e.target.value)
    }
  return (
    <div>
        <textarea value={text} onChange={(e)=>countRemaningChars(e)}></textarea>
        <p>Remaining Chars Are : {200-text.length}</p>      
    </div>
  )
}

export default RealTimeCharacterCounter
