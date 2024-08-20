import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  

  return (
    <nav>
        <Link to="/" className='title'>Artist Quest</Link>
        <div className='menu' onClick = {() => {
          setMenuOpen(!menuOpen)
        }
      }>
          <span> </span>
          <span> </span>
          <span> </span>

        </div>
      <ul className = {menuOpen ? "open" : ""}>
        <li><NavLink to="/quiz">take our quiz</NavLink></li>
        <li><NavLink to="/folk">folk</NavLink></li>
        <li><NavLink to="/country">country</NavLink></li>
        <li><NavLink to="/rb">r & b</NavLink></li>
        <li><NavLink to="/about">about me</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
