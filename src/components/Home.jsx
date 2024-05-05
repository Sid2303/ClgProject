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
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3.svg" alt="Car Rental" />
              <h1>Your Personal car rental</h1>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-home-pic8.svg" alt="" />
            </div>
            <div className='right_side'></div>
          </div>
          <div className='background_photo'>
            <img src="" alt="Image Here" />
          </div>
        </div>
      </div>
    </>
  )
}
