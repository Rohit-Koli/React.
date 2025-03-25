import React from 'react'

/
Receiving Props in Functional Component

we Can also use this below code 
const Welcome = (props) => {
    props.name , props.age
/
const Welcome = ({name,age}) => {
  return (
    <div>
      <h3>
        Hello {name} , and you are {age} old !! .
      </h3>
    </div>
  )
}

export default Welcome
