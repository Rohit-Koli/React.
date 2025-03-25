import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'

const Layout = () => {
    const route=createBrowserRouter([
        {
            path:'/',
            element:<Home/>,
            children:[
                
            ]
        }
    ])
  return (
    <div>
      
    </div>
  )
}

export default Layout
