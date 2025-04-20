"use client"
import "bootstrap/dist/js/bootstrap.bundle.js"
import React from 'react';
import Image from 'next/image';
import { IoIosMail } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import Link from 'next/link';

const Navbar = () => {
  const nav=[{
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"/",
    name:"Home"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"/about",
    name:"About"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"/services",
    name:"Services"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"/dept",
     name:"Department"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"/doctor",
     name:"Doctor"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"/blog",
     name:"Blog"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"/contact",
     name:"Contact"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"/register",
     name:"Register"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"/login",
     name:"Login"
  },
  

]
  return (
    <div>
      <header>
        <div className="header-top-bar head">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                  <li className="list-inline-item">
                    <a href="mailto:support@gmail.com" className="text-light text-decoration-none">
                      <IoIosMail className="me-1" />
                      support@novena.com
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <FaMapMarkerAlt className="me-1" />
                    Address Ta-134/A, New York, USA
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 text-center">
                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                  <a href="tel:+23-345-67890" className="text-light text-decoration-none">
                    <IoCall className="me-1 fs-5" />
                    <span>Call Now : </span>
                    <span className="h4">823-4565-13456</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navigation" id="navbar">
          <div className="container">
            <a className="navbar-brand" href="#">
              <Image
                src="/logo.png" // Path to the logo in the public folder
                alt="Logo"
                width={200}
                height={60}
                className="d-inline-block align-text-top"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
              {nav?.map((items, index) => (
  <li className={items.liClass} key={items.href || index}>
    <Link className={items.aClass} href={items.href}>
      {items.name}
    </Link>
  </li>
))}

              </ul>
            </div>
          </div>
        </nav>
       
      </header>
    </div>
  );
};

export default Navbar;
