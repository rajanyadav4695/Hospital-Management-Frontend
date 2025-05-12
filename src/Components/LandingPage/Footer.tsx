
import Image from 'next/image'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <div>
        <footer className="footer section gray-bg">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 mr-auto col-sm-6">
        <div className="widget mb-5 mb-lg-0">
          <div className="logo mb-4">
            <Image
                            src="/logo.png" // Path to the logo in the public folder
                            alt="Logo" // Alt text for accessibility
                            width={200} // Set the width of the logo
                            height={60} // Set the height of the logo
                            className="d-inline-block align-text-top" // Optional: Add Bootstrap classes for alignment
                          />
          </div>
          <p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>
          <ul className="list-inline footer-socials mt-4">
            <li className="list-inline-item"><a href="https://www.facebook.com"><FaFacebookF className='fs-5 text-primary'/></a></li>
            <li className="list-inline-item"><a href="https://twitter.com"><FaXTwitter className='fs-5 text-dark'/></a></li>
            <li className="list-inline-item"><a href="https://www.youtube.com"><FaYoutube className='fs-5 text-danger'/></a></li>
            <li className="list-inline-item"><a href="https://www.instagram.com"><IoLogoInstagram className='fs-5 text-danger'/></a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6">
        <div className="widget mb-5 mb-lg-0">
          <h4 className="text-capitalize mb-3">Department</h4>
          <div className="divider mb-4" />
          <ul className="list-unstyled footer-menu lh-35">
            <li><a href="#">Surgery </a></li>
            <li><a href="#">Wome's Health</a></li>
            <li><a href="#">Radiology</a></li>
            <li><a href="#">Cardioc</a></li>
            <li><a href="#">Medicine</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6">
        <div className="widget mb-5 mb-lg-0">
          <h4 className="text-capitalize mb-3">Support</h4>
          <div className="divider mb-4" />
          <ul className="list-unstyled footer-menu lh-35">
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Company Support </a></li>
            <li><a href="#">FAQuestions</a></li>
            <li><a href="#">Company Licence</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="widget widget-contact mb-5 mb-lg-0">
          <h4 className="text-capitalize mb-3">Get in Touch</h4>
          <div className="divider mb-4" />
          <div className="footer-contact-block mb-4">
            <div className="icon d-flex align-items-center">
              <i className="icofont-email mr-3" />
              <span className="h6 mb-0">Support Available for 24/7</span>
            </div>
            <h4 className="mt-2"><a href="tel:+23-345-67890">Support@email.com</a></h4>
          </div>
          <div className="footer-contact-block">
            <div className="icon d-flex align-items-center">
              <i className="icofont-support mr-3" />
              <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
            </div>
            <h4 className="mt-2 text-dark"><a href="tel:+916391820086">+91 6391820086</a></h4>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-btm py-4 mt-5">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6 mx-auto">
          <div className="copyright">
            © Copyright Reserved to <span className="text-color">Novena</span> by <a href="#" target="_blank">Rony</a>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</footer>

    </div>
  )
}

export default Footer