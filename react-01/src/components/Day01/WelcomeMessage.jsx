import React from 'react'
import Welcome from './Welcome'

const WelcomeMessage = (prop) => {
  if(prop.username){
    return <h2>Welcome {prop.username}</h2>
  }else{
    return <h2>Welcome Guest !</h2>
  }
}

export default WelcomeMessage
