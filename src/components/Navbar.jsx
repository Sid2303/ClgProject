import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3.svg"
            alt="" />
        </div>
        <div className='navigation'>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/offer">Offer</NavLink>
                </li>
                <li>
                    <NavLink to="/Details">Details</NavLink>
                </li>
                <li>
                    <NavLink to="/aboutus">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/faq">FAQ</NavLink>
                </li>
                <li>
                    <NavLink to="contact">Contact</NavLink>
                </li>
                <li>
                    <div>
                        <a href="#">Call Us</a>
                    </div>  
                </li>
            </ul>
        </div>
    </nav>
    // <nav class="navbar navbar-expand-lg bg-body-tertiary">
    //     <div class="container-fluid">
    //         <a class="navbar-brand" href="#">Navbar</a>
    //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //         </button>
    //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //                 <li class="nav-item">
    //                 <a class="nav-link active" aria-current="page" href="#">Home</a>
    //                 </li>
    //                 <li class="nav-item">
    //                 <a class="nav-link" href="#">Link</a>
    //                 </li>
    //                 <li class="nav-item">
    //                 <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    //                 </li>
    //             </ul>
    //             <form class="d-flex" role="search">
    //                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //                 <button class="btn btn-outline-success" type="submit">Search</button>
    //             </form>
    //         </div>
    //     </div>
    // </nav>
  )
}
