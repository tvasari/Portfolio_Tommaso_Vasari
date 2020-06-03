import React from 'react';
import './Logo.css'
import logo from '../../immagini/logo.png';

const Logo = ( {route, changeRoute} ) => {
	return route !== 'home'? (
		<li onClick={(e) => changeRoute('home')} id="logo" className='layer' data-depth='0.3'>
			<img src={logo} alt='' className='click'/>
		</li>
	) :
	(
		<li id="logo" className='layer' data-depth='0.3'>
			<img src={logo} alt=''/>
		</li>
	);
}

export default Logo;