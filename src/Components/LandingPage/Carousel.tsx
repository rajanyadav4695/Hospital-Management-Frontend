import Image from 'next/image'
import React from 'react'
import { GrSchedule } from "react-icons/gr";
import { FaBookMedical } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
const Carousel = () => {
  return (
    <div>
        <section className="banner">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-12 col-xl-7">
        <div className="block">
          <div className="divider mb-3" />
          <span className="text-uppercase text-sm letter-spacing ">Total Health care solution</span>
          <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
          <p className="mb-4 pr-5">Compassion in Care, Precision in Practice — Empowering Hospitals with Smart Management for a Healthier Tomorrow</p>
          <div className="btn-container ">
            <a href="appoinment.html" target="_blank" className="btn btn-main-2 btn-icon btn-round-full">Make appoinment</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ========== */}
<section className="features">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="feature-block d-lg-flex">
          <div className="feature-item m-5 mb-lg-0">
            <div className="feature-icon mb-4">
              <center> <FaBookMedical className='fs-1 ic'/></center>
           
            </div>
            <span>24 Hours Service</span>
            <h4 className="mb-3">Online Appoinment</h4>
            <p className="mb-4">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
            <a href="appoinment.html" className="btn btn-main btn-round-full">Make appoinment</a>
          </div>
          <div className="feature-item m-5 mb-lg-0">
            <div className="feature-icon mb-4">
            <center> <GrSchedule className='fs-1 ic' /></center>
            </div>
            <span>Timing schedule</span>
            <h4 className="mb-3">Working Hours</h4>
            <ul className="w-hours list-unstyled">
              <li className="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li>
              <li className="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li>
              <li className="d-flex justify-content-between">Sat - sun : <span>10:00 - 17:00</span></li>
            </ul>
          </div>
          <div className="feature-item m-5 mb-lg-0">
            <div className="feature-icon mb-4">
             <center>
             <center> <RiCustomerService2Fill className='fs-1 ic'/></center>
             </center>
            </div>
            <span>Emegency Cases</span>
            <h4 className="mb-3">1-800-700-6200</h4>
            <p>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Carousel