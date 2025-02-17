import React from 'react'

const ProfileCard = ({name,bio,isOnline}) => {
  return isOnline ? <pre>
    <h2>Name : {name} </h2>
    <h2>Bio : {bio}</h2>
    <h2>Online Status : 🟢 Online</h2>
  </pre> :
  <pre>
  <h2>Name : {name} </h2> 
  <h2>Bio : {bio}</h2>
  <h2>Online Status : 🔴 Offline</h2> <br />
</pre>
}

export default ProfileCard
