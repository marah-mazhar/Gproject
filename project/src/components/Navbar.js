import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css"
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';


function Navbar() {
  const location = useLocation();
  const showNavbar = ['/', '/Login','/Home']; // Array of paths where the Navbar should be shown

  if (!showNavbar.includes(location.pathname)) {
    return null; // Don't render the Navbar on other pages
  }
  return (
    <div className="navbar">
      <div className="leftSide">
      <StoreMallDirectoryIcon fontSize="large"/>
        <h1>Supermarket </h1>
        

      </div>
      <div className="rightSide">
      <Link to="/Home"> Home </Link>
      <Link to="/Login"> Login </Link>
      

      </div>
    </div>
  )
}

export default Navbar;