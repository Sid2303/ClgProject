import React from 'react'
import "../styles/Details.scss"

export default function Details() {
  return (
    <>
      <div className="details">
        <div className="top-jeep">
          <div className="lhs">
            <h1>Mercedes Jeep</h1>
            <p><span>$25</span>per day</p>
            <div className='jeep-photo'>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-pic1.webp" alt="" />
            </div>
            <div className='lower-left'>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-pic2.webp" alt="" />
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-pic3.webp" alt="" />
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-pic4.webp" alt="" />
            </div>
          </div>
          <div className="rhs">
            <div className="Technical-specifications">
              <p>Technical specifications</p>
              <div className='tech-cards'>
                <div>
                  <div>
                    <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-icon1.svg" alt="" />
                    <p>Class</p>
                    <p>Sports</p>
                  </div>
                  <div>
                    <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-icon2.svg" alt="" />
                    <p>Doors</p>
                    <p>5</p>
                  </div>
                  <div>
                    <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-icon3.svg" alt="" />
                    <p>Gearbox</p>
                    <p>Manual</p>
                  </div>
                </div>
                <div>
                  <div>
                    <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-icon4.svg" alt="" />
                    <p>Fuel Usage</p>
                    <p>10l/100 miles</p>
                  </div>
                  <div>
                    <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-icon5.svg" alt="" />
                    <p>Fuel</p>
                    <p>Petrol</p>
                  </div>
                  <div>
                    <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-icon6.svg" alt="" />
                    <p>Deposit</p>
                    <p>$250</p>
                  </div>
                </div>
              </div>
              <button>Book a car</button>
              <div className='car-equipment'>
                <h4>Car Equipment</h4>
                <div>
                  <div>
                    <p>Abs</p>
                    <p>Air Bags</p>
                    <p>HD Audio System</p>
                  </div>
                  <div>
                    <p>A/C</p>
                    <p>Power Steering</p>
                    <p>Cruise Control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="unique-ways">
            
        </div>
        <div className="bottom-card">

        </div>
      </div>
    </>
  )
}
