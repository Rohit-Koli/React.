import React from 'react'

const UserStatus = ({isLoggedIn}) => {
  return isLoggedIn ? <h2>Welcome Admin </h2> : "You have to login First to Access this Page !"
}

export default UserStatus
