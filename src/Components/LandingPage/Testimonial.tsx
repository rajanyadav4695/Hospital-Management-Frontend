"use client";
import Image from "next/image";

import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonial = () => {
  return (
    <div>
      <section className="section testimonial-2 gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2>We served over 5000+ Patients</h2>
                <div className="divider mx-auto my-4" />
                <p>
                  Lets know moreel necessitatibus dolor asperiores illum
                  possimus sint voluptates incidunt molestias nostrum
                  laudantium. Maiores porro cumque quaerat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto testimonial-wrap-2">
              <div className="testimonial-block style-2  gray-bg ">
                <div className="testimonial-thumb">
                  <Image
                    src="/test-thumb1.jpg"
                    height={100}
                    width={100}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="client-info ">
                  <h4>Amazing service!</h4>
                  <span>John Partho</span>
                  <p>
                    They provide great service facilty consectetur adipisicing
                    elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a
                    vel eos adipisci suscipit fugit placeat.
                  </p>
                  <RiDoubleQuotesR className="text-lg lightpink float-end" />
                </div>
              </div>
              <div className="testimonial-block style-2  gray-bg">
                <div className="testimonial-thumb">
                  <Image
                    src="/test-thumb2.jpg"
                    height={100}
                    width={100}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="client-info">
                  <h4>Expert doctors!</h4>
                  <span>Mullar Sarth</span>
                  <p>
                    They provide great service facilty consectetur adipisicing
                    elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a
                    vel eos adipisci suscipit fugit placeat.
                  </p>
                </div>
                <RiDoubleQuotesR className="text-lg lightpink float-end" />
              </div>
              <div className="testimonial-block style-2  gray-bg">
                <div className="testimonial-thumb">
                  <Image
                    src="/test-thumb3.jpg"
                    height={100}
                    width={100}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="client-info">
                  <h4>Good Support!</h4>
                  <span>Kolis Mullar</span>
                  <p>
                    They provide great service facilty consectetur adipisicing
                    elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a
                    vel eos adipisci suscipit fugit placeat.
                  </p>
                </div>
                <RiDoubleQuotesR className="text-lg lightpink float-end" />
              </div>
              {/* <div className="testimonial-block style-2  gray-bg">
            <div className="testimonial-thumb">
              <Image src="/test-thumb4.jpg"  height={100} width={100} alt='' className="img-fluid" />
            </div>
            <div className="client-info">
              <h4>Nice Environment!</h4>
              <span>Partho Sarothi</span>
              <p className="mt-4">
                They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
              </p>
            </div>
            <RiDoubleQuotesR className='text-lg lightpink float-end'/>
          </div>
          <div className="testimonial-block style-2  gray-bg">
            <div className="testimonial-thumb">
              <Image src="/test-thumb1.jpg" height={100} width={100} alt='' className="img-fluid" />
            </div>
            <div className="client-info">
              <h4>Modern Service!</h4>
              <span>Kolis Mullar</span>
              <p>
                They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
              </p>
            </div>
            <RiDoubleQuotesR className='text-lg lightpink float-end'/>
          </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="section clients">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2>Partners who support us</h2>
                <div className="divider mx-auto my-4" />
                <p>
                  Lets know moreel necessitatibus dolor asperiores illum
                  possimus sint voluptates incidunt molestias nostrum
                  laudantium. Maiores porro cumque quaerat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row clients-logo">
            <div className="col-lg-2">
              <div className="client-thumb">
                <Image
                  src="/1.png"
                  alt=""
                  height={100}
                  width={100}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <Image
                  src="/2.png"
                  alt=""
                  height={100}
                  width={100}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <Image
                  src="/3.png"
                  alt=""
                  height={100}
                  width={100}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <Image
                  src="/4.png"
                  alt=""
                  height={100}
                  width={100}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <Image
                  src="/5.png"
                  alt=""
                  height={100}
                  width={100}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <Image
                  src="/6.png"
                  alt=""
                  height={100}
                  width={100}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <Image
                  src="/3.png"
                  alt=""
                  height={100}
                  width={100}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <Image
                  src="/4.png"
                  alt=""
                  height={100}
                  width={100}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <Image
                  src="/5.png"
                  alt=""
                  height={100}
                  width={100}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <Image
                  src="/6.png"
                  alt=""
                  height={100}
                  width={100}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slick"></section>
    </div>
  );
};

export default Testimonial;
