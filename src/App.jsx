import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Footer from './component/Footer'

function App() {
  
  return (
    <>
    
      <Navbar/>
      <Home/>
      <div className=" bg-blue-950 p-2 pb-4 m-2 mt-0 relative top-[-50px] bg-gradient-to-b from-gray-900 to-gray-100  rounded-t-xl lg:rounded-t-[80px]">
       <About/>
      </div>
      <Experience/>
      <Projects/>
      <Footer/>
      
        
    </>
  )
}

export default App
