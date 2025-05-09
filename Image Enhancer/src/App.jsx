import React from 'react'
import Home from './Components/Home'
import {Routes,Route} from 'react-router-dom'
import ImageEnhancer from './Components/ImageEnhancer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
     <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/imageEnhancer' element={<ImageEnhancer/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
    
  )
}

export default App
