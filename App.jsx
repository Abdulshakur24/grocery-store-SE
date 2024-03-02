import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <div className='min-vh-100'>
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
