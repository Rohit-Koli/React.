import React, { useState } from 'react'

const LoginForm = () => {
    const [email,setEmail]=useState("")
    const [password,setPassoword]=useState("")
    const [cnfPassword,setCnfPassoword]=useState("")
    let formStatus=true
    function submitForm(){
        alert('FORM SUBMITED !')
    }
    function passwordCheck(){
        if(password===cnfPassword){
            submitForm()
        }else{
            alert('PASSWORD NOT MATCHED !')
        }
    }
  return (
    <div>
      <h2>LOGIN FORM</h2>
      <form action="">
        <input type="email" placeholder='Enter EMAIL '  value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <input type="password" placeholder='Enter Password !' value={password} onChange={(e)=>setPassoword(e.target.value)} /><br/>
        <input type="password" placeholder='Confirm Password !'  value={cnfPassword} onChange={(e)=>setCnfPassoword(e.target.value)} />
        <button onClick={passwordCheck}>SUBMIT</button>
      </form>
    </div>
  )
}

export default LoginForm
