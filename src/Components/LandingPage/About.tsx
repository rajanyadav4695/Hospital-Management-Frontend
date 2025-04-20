import Image from 'next/image'
import React from 'react'
const About = () => {
  return (
    <div>
<div>
  <section className="page-title bg-1 text-light">
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block text-center">
            <span className="text-light">About Us</span>
            <h1 className="text-capitalize mb-5 text-lg text-light">About Us</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section about-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h2 className="title-color">Personal care for your healt='Image'hy living</h2>
        </div>
        <div className="col-lg-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus.</p>
          <img src="images/about/sign.png" alt='Image' className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  <section className="fetaure-page ">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="about-block-item mb-5 mb-lg-0">
            <Image src="/about-1.jpg" alt='Image' height={100} width={100} className="img-fluid w-100" />
            <h4 className="mt-3">Healt='Image'hcare for Kids</h4>
            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="about-block-item mb-5 mb-lg-0">
          <Image src="/about-2.jpg" alt='Image' height={100} width={100} className="img-fluid w-100" />
            <h4 className="mt-3">Medical Counseling</h4>
            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="about-block-item mb-5 mb-lg-0">
          <Image src="/about-3.jpg" alt='Image' height={100} width={100} className="img-fluid w-100" />
            <h4 className="mt-3">Modern Equipments</h4>
            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="about-block-item">
          <Image src="/about-4.jpg" alt='Image' height={100} width={100} className="img-fluid w-100" />
            <h4 className="mt-3">Qualified Doctors</h4>
            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section awards">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <h2 className="title-color">Our Doctors achievements </h2>
          <div className="divider mt-4 mb-5 mb-lg-0" />
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="award-img">
              <Image src="/3.png" alt='Image' height={100} width={100} className="img-fluid w-100" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="award-img">
              <Image src="/4.png" alt='Image' height={100} width={100} className="img-fluid w-100" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="award-img">
              <Image src="/1.png" alt='Image' height={100} width={100} className="img-fluid w-100" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="award-img">
              <Image src="/2.png" alt='Image' height={100} width={100} className="img-fluid w-100" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="award-img">
              <Image src="/5.png" alt='Image' height={100} width={100} className="img-fluid w-100" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="award-img">
              <Image src="/6.png" alt='Image' height={100} width={100} className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section team">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center">
            <h2 className="mb-4">Meet Our Specialist</h2>
            <div className="divider mx-auto my-4" />
            <p>Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-block mb-5 mb-lg-0">
          <Image src="/1.jpg" alt='Image' height={100} width={100} className="img-fluid w-100" />
            <div className="content">
              <h4 className="mt-4 mb-0"><a href="doctor-single.html">John Marshal</a></h4>
              <p>Internist, Emergency Physician</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-block mb-5 mb-lg-0">
          <Image src="/2.jpg" alt='Image' height={100} width={100} className="img-fluid w-100" />
            <div className="content">
              <h4 className="mt-4 mb-0"><a href="doctor-single.html">Marshal Root</a></h4>
              <p>Surgeon, Сardiologist</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-block mb-5 mb-lg-0">
          <Image src="/3.jpg" alt='Image' height={100} width={100} className="img-fluid w-100" />
            <div className="content">
              <h4 className="mt-4 mb-0"><a href="doctor-single.html">Siamon john</a></h4>
              <p>Internist, General Practitioner</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-block">
          <Image src="/4.jpg" alt='Image' height={100} width={100} className="img-fluid w-100" />
            <div className="content">
              <h4 className="mt-4 mb-0"><a href="doctor-single.html">Rishat Ahmed</a></h4>
              <p>Orthopedic Surgeon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section testimonial">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-6">
          <div className="section-title">
            <h2 className="mb-4">What they say about us</h2>
            <div className="divider  my-4" />
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6 testimonial-wrap offset-lg-6">
          <div className="testimonial-block">
            <div className="client-info ">
              <h4>Amazing service!</h4>
              <span>John Partho</span>
            </div>
            <p>
              They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
            </p>
            <i className="icofont-quote-right" />
          </div>
          <div className="testimonial-block">
            <div className="client-info">
              <h4>Expert doctors!</h4>
              <span>Mullar Sarth</span>
            </div>
            <p>
              They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
            </p>
            <i className="icofont-quote-right" />
          </div>
          <div className="testimonial-block">
            <div className="client-info">
              <h4>Good Support!</h4>
              <span>Kolis Mullar</span>
            </div>
            <p>
              They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
            </p>
            <i className="icofont-quote-right" />
          </div>
          <div className="testimonial-block">
            <div className="client-info">
              <h4>Nice Environment!</h4>
              <span>Partho Sarothi</span>
            </div>
            <p>
              They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
            </p>
            <i className="icofont-quote-right" />
          </div>
          <div className="testimonial-block">
            <div className="client-info">
              <h4>Modern Service!</h4>
              <span>Kolis Mullar</span>
            </div>
            <p>
              They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
            </p>
            <i className="icofont-quote-right" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default About