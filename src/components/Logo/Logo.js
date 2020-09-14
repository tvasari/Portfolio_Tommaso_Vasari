import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Logo.css'
import logo from '../../immagini/logo.png';

const Logo = () => {
  const location = useLocation();

  return( 
    <li id="logo" className='layer' data-depth='0.1'>
      {
        location.pathname === '/'
        ? <img src={logo} alt='Tommaso Vasari'/>
        : (
          <Link to='/'>
            <img src={logo} alt='Tommaso Vasari'/>
          </Link>
        )
      }
    </li>
  );
}

export default Logo;