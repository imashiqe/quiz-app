import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
             <nav className='header'>
             {/* <img src={logo} alt="" />  */}
              <div>
              <Link to="/">Home</Link>
              <Link to="/statement">Statement</Link>
              <Link to="/blog">Blog</Link>
              </div>
            </nav>
        </div>
    );
};

export default Header;