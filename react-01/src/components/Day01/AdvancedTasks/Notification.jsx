import React from 'react'

const Notification = ({type,message,timestamp}) => {
  if(type==="Success"){
       return <h2> {message} - {timestamp} </h2>
  }else if (type==="Warning"){
    return <h2> {message} - {timestamp}</h2>
  }else{
    return   <h2> {message} - {timestamp}</h2>
  }
}

export default Notification
