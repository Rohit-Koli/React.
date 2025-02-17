import React from 'react'

const PricingPlan = ({planName,price,fetures}) => {
  if(price===29.99){
    return(
        <>
        <h2>🌟{planName} - ${price}/month</h2>
        Features :<br/>
        <ul>
            {fetures.map((f,i)=>(
                <li key={i}>
                    ✅{f.storage}<br/>
                    ✅{f.support}<br/>
                    ✅{f.more}<br/>
                </li>
            ))}
        </ul>
        </>        
        
    )
  }else{
    return(
        <>
        <h2>💼{planName} - ${price}/month</h2>
        Features :<br/>
        {fetures.forEach(element => {
            <h2>✅{element}</h2>
        })}
        </> 
    )
  }
}

export default PricingPlan
