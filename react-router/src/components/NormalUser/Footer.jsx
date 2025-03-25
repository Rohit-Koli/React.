import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <div className=''>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/info'>Info</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Footer
