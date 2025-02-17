import React from 'react'

const UserCard = ({name,age,location}) => {
  return (
    <div>
      hello {name} !.<br/>
      Your Age is : {age}.<br/>
      Location : {location}
    </div>
  )
}

export default UserCard
