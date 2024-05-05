import React from 'react';
import "../styles/Home.scss";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className='home'>

        {/* <!-- HERO SECTION --> */}
        <div className="hero_section">
          <div className='book_section'>
            <div className='left_side'>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3.svg" alt="Car Rental" />
              <h1>Your Personal car rental</h1>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-home-pic8.svg" alt="" />
            </div>

            <div className='right_side'>
              <div className="table">
                <h3>Book your car</h3>
                <ul>
                  <li>
                    <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <input type="date"  />
                  </li>
                  <li>
                    <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <button>Book</button>
              </div>
            </div>
          </div>
          <div className='background_photo'>
            <img src="" alt="Image Here" />
          </div>
        </div>
      </div>
    </>
  )
}
