import React from 'react'

const ButtonClick = () => {
    const hadleClick=()=>{
        alert('Button is pressed !')
    }
  return (
    <div>
        <button type="button" onClick={hadleClick}>Alert Button !</button>      
    </div>
  )
}

export default ButtonClick
