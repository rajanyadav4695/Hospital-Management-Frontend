import About from '@/Components/LandingPage/About'
import Footer from '@/Components/LandingPage/Footer'
import Navbar from '@/Components/LandingPage/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Footer/>
    </div>
  )
}

export default page