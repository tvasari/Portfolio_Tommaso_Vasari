import React from 'react';
import './Logo.css'
import logo from '../../immagini/logo.png';

const Logo = () => {
	return(
		<li id="logo" className='layer' data-depth='0.1'>
			<img src={logo} alt='Tommaso Vasari' className='click'/>
		</li>
	);
}

export default Logo;