import React from 'react';
import { Link } from 'react-router-dom';
import img  from '../Images/Blue.png';
import './Header.css';
const Header = () => {
    return (
        <div>
             <nav className='header'>
                <Link to="/"><img src={img} alt="" /> </Link>
                
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