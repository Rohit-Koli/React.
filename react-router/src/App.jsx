import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/NormalUser/Layout'

function App() {
  const [count, setCount] = useState(0)
  // const route=createBrowserRouter()
  // route=[
  //   {
      
  //   }
  // ]

  return (
    <>
    <Layout/>
    </>
  )
}

export default App
