import React from 'react'

const NavBar = ({totalCounters}) => {
  console.log("Navbar - Rendered");

  return ( 
  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
  <a className="navbar-brand" href="_blank" style={{fontSize : '1.5rem', fontWeight:'bolder', paddingLeft: '30px'}}>Shopping Cart 🛍️ 
  <span className="badge badge-pill badge-secondary cart" style={{fontSize : '1rem', verticalAlign: 'top'}}>{totalCounters}</span></a>
  </div>
</nav>);
}
 
export default NavBar;
