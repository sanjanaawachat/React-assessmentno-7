import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='header'>
      <ul>
        <li>
          <Link className='nav-Link' to="/Home">Home</Link></li>

        <li>
          <Link className='nav-Link' to="/Student_form">Student</Link>
        </li>

        <li>
          <Link className='nav-Link' to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;