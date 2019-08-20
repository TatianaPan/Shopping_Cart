import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

//  const Navbar = () => {
//     return(
//         <nav>
//         <div className="nav-wrapper">
//           <a href="#" className="brand-logo">Manolo Blahnik Shoes</a>
//           <ul id="nav-mobile" className="right hide-on-med-and-down">
//             <li><a href="sass.html">My cart</a></li>
//             <li><a href="badges.html"><i className="material-icons">shopping_cart</i></a></li>
//           </ul>
//         </div>
//       </nav>
//     )
// }

class Navbar extends Component {
  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Manolo Blahnik Shoes</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className='cart-quantity'>My cart: { this.props.totalQuantity }</li>
            <li className='cart-icon'><i className="material-icons"> shopping_cart</i></li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
    
  return {
      totalQuantity: state.totalQuantity
  }
}

export default connect(mapStateToProps)(Navbar);