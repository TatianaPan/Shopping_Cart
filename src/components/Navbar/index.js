import React from 'react';
//import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Manolo Blahnik Shoes</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">My cart</a></li>
            <li><a href="badges.html"><i className="material-icons">shopping_cart</i></a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;