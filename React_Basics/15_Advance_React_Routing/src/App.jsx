import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

import NotFound from './pages/NotFound'
import Navbar2 from './components/Navbar2'
import Courses from './pages/Courses'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses_details from './pages/Courses_details'

const App = () => {
  return (
    <div className='min-h-screen w-screen bg-black text-white flex flex-col' >
      <Navbar />
      <Navbar2 />

      <div className='flex-1'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<Courses_details />} />
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />}></Route>
          <Route path='women' element={<Women />}></Route>
          <Route path='kids' element={<Kids />}></Route>


        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App