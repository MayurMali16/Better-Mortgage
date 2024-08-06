import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <div className='nav'>
        <button className='bars-button' onClick={toggleSidebar}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul>
          <div className='left-container'>
            <li><span>Better</span></li>
            <Link to="/"><li>Home</li></Link>
            <Link to="/calculator"><li>Mortgage Calculator</li></Link>
            <Link to="/about"><li>About Us</li></Link>
          </div>
          <div className='right-container'>
            <li><i className="fa-solid fa-phone"></i></li>
            <Link to="/signin"><li className='sign-in'>Sign in</li></Link>
          </div>
        </ul>
      </div>
      <div className={`sidebar ${sidebar ? 'active' : ''}`}>
        <ul>
        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/calculator" onClick={toggleSidebar}>Mortgage Calculator</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>About Us</Link></li>
          <li><Link to="/signin" onClick={toggleSidebar}>Sign In</Link></li>
        </ul>
      </div>
      {sidebar && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Nav;
