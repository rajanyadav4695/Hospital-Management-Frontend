import React from 'react'

import { IoFlaskSharp } from "react-icons/io5";
import { FaHeartPulse } from "react-icons/fa6";
import { TbDental } from "react-icons/tb";
import { FaCrutch } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { FaDna } from "react-icons/fa";

const Award = () => {
  return (
    <div>
 <section className="section service gray-bg">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-7 text-center">
        <div className="section-title">
          <h1 className='font'>Award winning patient care</h1>
          <div className="divider mx-auto my-4" />
          <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
          <div className="icon d-flex align-items-center">
          <IoFlaskSharp className='me-2 text-lg pink'/>
            <h4 className="mt-3 mb-3">Laboratory services</h4>
          </div>
          <div className="content">
            <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
          <div className="icon d-flex align-items-center">
          <FaHeartPulse className='me-2 text-lg pink'/>
            <h4 className="mt-3 mb-3">Heart Disease</h4>
          </div>
          <div className="content">
            <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
          <div className="icon d-flex align-items-center">
          <TbDental className='me-2 text-lg pink'/>
            <h4 className="mt-3 mb-3">Dental Care</h4>
          </div>
          <div className="content">
            <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
          <div className="icon d-flex align-items-center">
          <FaCrutch className='me-2 text-lg pink'/>
            <h4 className="mt-3 mb-3">Body Surgery</h4>
          </div>
          <div className="content">
            <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
          <div className="icon d-flex align-items-center">
          <GiBrain className='me-2 text-lg pink'/>
            <h4 className="mt-3 mb-3">Neurology Sargery</h4>
          </div>
          <div className="content">
            <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
          <div className="icon d-flex align-items-center">
          <FaDna className='me-2 text-lg pink'/>
            <h4 className="mt-3 mb-3">Gynecology</h4>
          </div>
          <div className="content">
            <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Award