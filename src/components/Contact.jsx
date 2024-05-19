import React from 'react'
import "../styles/Contact.scss"

export default function Contact() {
  return (
    <>
      <div className="contact-section">
        <div className='upperSection'>
          <div className='leftSide'>
            <p>Contact</p>
            <h1>Contact us to schedule an appointment. We look forward to seeing you!</h1>
            <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-home-pic3.svg" alt="" />
          </div>
          <div className='rightSide'>
            <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-icon4.svg" alt="" />
          </div>
        </div>
        <div className='lowerSection'>
          <div className="lowerLeft">
            <div className="phone">
              <div>
                <p>Phone:</p>
              </div>
              <div>
                <h3>+91</h3>
                <h1>5337841245</h1>
              </div>
            </div>
            <div className="mail">
              <div>
                <p>Mail:</p>
              </div>
              <div>
                <h1>noreply@envato.com</h1>
              </div>
            </div>
            <div className="time">
              <div>
                <p>Monday - Friday</p>
                <p>09:00 AM - 06:00 PM</p>
              </div>
              <div>
                <p>Saturday</p>
                <p>10:00 AM - 02:00 PM</p>
              </div>
            </div>
          </div>
          <div className="lowerRight">
            <div className="bookingRide">
              <h4>Book your car</h4>
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div className='book-date'>
                <div className='lable-for-rent'>
                  <label htmlFor="">Rental</label>
                </div>
                <div className='input-for-rent'>
                  <input type="date" />
                </div>
              </div>
              <div>
                <div className='book-date'>
                <div className='lable-for-rent'>
                    <label htmlFor="">Return</label>
                  </div>
                  <div className='input-for-rent'>
                    <input type="date" />
                  </div>
                </div>
              </div>
              <button>Book</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
