import { UserRegister } from '@/Components/Common/UserRegister'
import Footer from '@/Components/LandingPage/Footer'
import Navbar from '@/Components/LandingPage/Navbar'
import React from 'react'

 const page = () => {
  return (
    <div>
      <Navbar/>
        <UserRegister/>
        <Footer/>
    </div>
  )
}
export default page