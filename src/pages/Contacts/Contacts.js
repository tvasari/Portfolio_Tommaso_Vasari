import React, { Fragment } from 'react';
import Logo from 'components/Logo/Logo';
import github from 'immagini/github.png';
import linkedin from 'immagini/linkedin.png';
import email from 'immagini/email.png';
import email2 from 'immagini/email2.png';
import mobile from 'immagini/mobile.png';
import mobilenumber from 'immagini/mobilenumber.png';

const Contacts = () => {
  return(
    <Fragment>
      <ul id="scene" data-pointer-events="all">
        <li className='layer no-logo' data-depth='0.7'>
          <div className='box-img'>
            <a rel="noopener noreferrer" href='https://github.com/tvasari' target="_blank">
              <img src={github} alt='' className='side-img info-img-top msi'/>
            </a>
          </div>							
        </li>
        <li className='layer no-logo' data-depth='0.7'>
          <div className='box-img'>
            <a href='https://www.linkedin.com/in/tommaso-vasari-0ba8721a5/' target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt='' className='side-img info-img-top msi'/>
            </a>
          </div>								
        </li>						
        <Logo />						
        <li className='layer no-logo' data-depth='0.7'>
          <div className='box-img'>
            <img src={email} alt='email-me' className='side-img msi info-img-top email'/>
            <div className='mini-box'>
              <img onClick={e => this.emailMe()} src={email2} alt='tommaso.vasari@gmail.com' className='email2 click side-img info-img-bot'/>
              <div className='search email1'></div>
            </div>
          </div>	
        </li>						
        <li className='layer no-logo' data-depth='0.7'>
          <div className='box-img'>
            <img src={mobile} alt='' className='side-img msi info-img-top mobile'/>
            <div className='mini-box'>
              <a href='tel:+39 3426822422'>
                <img src={mobilenumber} alt='' className='side-img info-img-bot'/>
                <div className='search mobilenumber'></div>
              </a>
            </div>
          </div>								
        </li>
      </ul>
    </Fragment>
  );
}

export default Contacts;