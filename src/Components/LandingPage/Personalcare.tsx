import Image from "next/image";
import React from 'react'
const Personalcare = () => {
  return (
    <div>
        <section className="section about">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-4 col-sm-6">
        <div className="about-img">
          <Image src="/img-1.jpg"
          height={350} width={350}
                          alt="img1"
                          className="img-fluid"
                        />
          <Image src="/img-2.jpg" alt="" height={350} width={350} className="img-fluid mt-4" />
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="about-img mt-4 mt-lg-0">
          <Image src="/img-3.jpg" alt="" height={350} width={350}className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="about-content pl-4 mt-4 mt-lg-0">
          <h2 className="title-color">Personal care <br />&amp; healthy living</h2>
          <p className="mt-4 mb-5">We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>
          <a href="#" className="btn btn-main-2 btn-round-full btn-icon">Services</a>
        </div>
      </div>
    </div>
  </div>
</section>





    </div>
  )
}

export default Personalcare