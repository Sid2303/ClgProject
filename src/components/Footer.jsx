import React from 'react'
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram, FaRegCopyright } from "react-icons/fa";
import '../styles/Footer.scss'

export default function Footer() {
  return (
    <>
        <footer>
          <div>
            <div className='upper-section'>
              <div className="worktime">
                <h1>Work Time</h1>
                <div className="location">
                  <p>Level 13, 2 Elizabeth St,
                    Melbourne, Victoria 3000,
                    Australia
                  </p>
                </div>
                <div className="timing">
                  <div>
                    <p>Monday - Friday</p>
                    <p>09:00 AM - 06:00 PM</p>
                  </div>
                  <div>
                    <p>Saturday</p>
                    <p>10:00 AM - 02:00 PM</p>
                  </div>
                </div>
                <div className="icons">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                  <FaPinterestP />
                </div>
              </div>
              <div className="navigaton">
                <h1>Navigation</h1>
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">Details</a></li>
                  <li><a href="">Offer</a></li>
                  <li><a href="">About Us</a></li>
                  <li><a href="">FAQ</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
              </div>
              <div className="downloadapp">
                <h1>Download</h1>
                <div>
                  <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-footer-pic1.svg" alt="" />
                  <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-footer-pic2.svg" alt="" />
                </div>
              </div>
            </div>
            <div className='lower-section'>
              <div>
                <FaRegCopyright />
                <p> 2024 Betheme by <span>Muffin group</span>| All Rights Reserved </p>
              </div>
              <div>
                <button></button>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}
