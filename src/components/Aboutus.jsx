import React from 'react'
import "../styles/Aboutus.scss"

export default function Aboutus() {
  return (
    <>
      <div className="hero-section">
        <div className='lhs'>
          <p>About Us</p>
          <h1><span>A massa in cursus</span> faucibus tincidunt eget neque, convallis at. Nunc at nisl.</h1>
          <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-home-pic3.svg" alt="" />
        </div>
        <div className='rhs'>
          <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-icon4.svg" alt="" />
        </div>
      </div>

      <div className="exp-section">
        <div>
          <div className="lhs">
            <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-about-pic1.webp" alt="" />
          </div>
          <div className="rhs">
            <h1><span>15 years</span> of experience</h1>
            <p>
              Lacus aliquet nunc aliquam praesent mattis leo ornare aliquet eget. Aliquet quis lectus quis posuere at quis. Ut sed pharetra
              eu est lobortis. Aenean ut risus, nisl cras est nec, risus. Egestas elit pretium ut porttitor suspendisse dolor nullam. 
              Eros tortor imperdiet bibendum id molestie. In quam quisque molestie leo sollicitudin.
            </p>
            <div>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-icon4.svg" alt="" />
              <h2>Customer friendly <span>company</span></h2>
            </div>
            <button>Book a car</button>
          </div>
        </div>
      </div>

    </>
  )
}
