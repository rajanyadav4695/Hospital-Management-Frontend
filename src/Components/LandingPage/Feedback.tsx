"use client"
import React from 'react'
import CountUp from 'react-countup'

const Feedback = () => {
  return (
    <div>
        <section className="cta-section ">
  <div className="container">
    <div className="cta position-relative">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-stat">
            <i className="icofont-doctor" />
            <span className="h3"><CountUp end={58} duration={3}/></span>k
            <p>Happy People</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-stat">
            <i className="icofont-flag" />
            <span className="h3"><CountUp end={700} duration={3}/></span>+
            <p>Surgery Comepleted</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-stat">
            <i className="icofont-badge" />
            <span className="h3"><CountUp end={40} duration={3}/></span>+
            <p>Expert Doctors</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-stat">
            <i className="icofont-globe" />
            <span className="h3"><CountUp end={20} duration={3}/></span>
            <p>Worldwide Branch</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Feedback