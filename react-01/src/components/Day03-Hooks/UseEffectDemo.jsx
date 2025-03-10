import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffectDemo = () => {
  const [users,setUsers]=useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </div>
  )
}

export default UseEffectDemo
