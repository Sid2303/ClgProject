import React from 'react';
import "../styles/Home.scss";

export default function Home() {
  return (
    <>
      <div className='home'>

        {/* <!-- HERO SECTION --> */}
        <div className="hero_section">
          <div className='book_section'>
            <div className='left_side'>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-logo.svg" alt="Car Rental" />
              <h1>Your Personal car rental</h1>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-home-pic8.svg" alt="" />
            </div>

            <div className='right_side'>
              <div className="table">
                <h3>Book your car</h3>
                <ul>
                  <li>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Car Type
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Sedan</a></li>
                        <li><a className="dropdown-item" href="#">Pickup</a></li>
                        <li><a className="dropdown-item" href="#">Hatchback</a></li>
                        <li><a className="dropdown-item" href="#">Vagon</a></li>
                        <li><a className="dropdown-item" href="#">Minivan</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Place of rental
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">City 1</a></li>
                        <li><a className="dropdown-item" href="#">City 2</a></li>
                        <li><a className="dropdown-item" href="#">City 3</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Place of return
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <input type="date"  className='inputDate'/>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Rental hour
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <button>Book</button>
              </div>
            </div>
          </div>
          <div className='background_photo'>
            <img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image Here" />
          </div>
        </div>
      </div>
    </>
  )
}
