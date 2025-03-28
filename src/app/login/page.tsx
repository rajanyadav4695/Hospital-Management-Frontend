import { Userlogin } from '@/Components/Common/Userlogin'
import Footer from '@/Components/LandingPage/Footer'
import Navbar from '@/Components/LandingPage/Navbar'
import React from 'react'

 const page = () => {
  return (
    <div>
      <Navbar/>
        <Userlogin/>
        <Footer/>
    </div>
  )
}
export default page
