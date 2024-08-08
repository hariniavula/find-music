import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to="/" className='logo-link'>Artist Quest</Link>
      </div>
      <ul className='nav-menu'>
        <li><Link to="/quiz">take our quiz</Link></li>
        <li><Link to="/hiphop">hip hop</Link></li>
        <li><Link to="/folk">folk</Link></li>
        <li><Link to="/country">country</Link></li>
        <li><Link to="/rb">r & b</Link></li>
        <li><Link to="/about">about me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
