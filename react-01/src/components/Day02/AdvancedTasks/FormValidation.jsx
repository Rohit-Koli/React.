import React, { useState } from 'react'

const FormValidation = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    function formSubmit(){
        if(password.length>=6){
            alert('FORM SUBMITED SUCCESSFULLY !')
        }else{            
            alert('PASSWORD LENGTH IS LESS THAN 6')
        }
    }
  return (
    <div>
      <h2>LOGIN FORM</h2>
      <form action="">
        <input type="text" value={email} placeholder='Enter Email ID' onChange={(e)=>setEmail(e.target.value)} /><br/>
        <input type="password" value={password} placeholder='Enter Password ' onChange={(e)=> setPassword(e.target.value)} />
        <button type="submit" onClick={formSubmit}>SUBMIT</button>
      </form>
    </div>
  )
}

export default FormValidation

