
import React from 'react'
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
const Navbar = () => {
  return (
    <div>
      <header>
        <div className="header-top-bar head">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                  <li className="list-inline-item ">
                    <a
                      href="mailto:support@gmail.com"
                      className="text-light text-decoration-none"
                    >
                      <IoIosMail className='me-1'/> 
                      support@novena.com
                    </a>
                  </li>
                  <li className="list-inline-item">
                  <FaMapMarkerAlt className='me-1'/>
                    Address Ta-134/A, New York, USA{" "}
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 text-center">
                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                  <a
                    href="tel:+23-345-67890"
                    className="text-light text-decoration-none"
                  ><IoCall className='me-1 fs-5'/>
                    <span>Call Now : </span>
                    <span className="h4">823-4565-13456</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navigation" id="navbar">
          <div className="container">
            <a className="navbar-brand" href="#">
              <Image
                src="/logo.png" // Path to the logo in the public folder
                alt="Logo" // Alt text for accessibility
                width={200} // Set the width of the logo
                height={60} // Set the height of the logo
                className="d-inline-block align-text-top" // Optional: Add Bootstrap classes for alignment
                
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
            <div className="collapse navbar-collapse" id="navbarmain">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">
                    Services
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown02"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Department
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li>
                      <a className="dropdown-item" href="#">
                        Departments
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="department-single.html"
                      >
                        Department Single
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="doctor.html"
                    id="dropdown03"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Doctors
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown03">
                    <li>
                      <a className="dropdown-item" href="doctor.html">
                        Doctors
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="doctor-single.html">
                        Doctor Single
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="appoinment.html">
                        Appoinment
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="blog-sidebar.html"
                    id="dropdown05"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown05">
                    <li>
                      <a className="dropdown-item" href="blog-sidebar.html">
                        Blog with Sidebar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-single.html">
                        Blog Single
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
