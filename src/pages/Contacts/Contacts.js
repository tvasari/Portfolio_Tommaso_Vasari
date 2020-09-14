import React, { Fragment } from 'react';
import Logo from 'components/Logo/Logo';
import SpotContainer from 'components/SpotContainer/SpotContainer';
import SubSpot from 'components/SubSpot/SubSpot';
import './Contacts.css';
import github from 'immagini/github.png';
import linkedin from 'immagini/linkedin.png';
import email from 'immagini/email.png';
import email2 from 'immagini/email2.png';
import mobile from 'immagini/mobile.png';
import mobilenumber from 'immagini/mobilenumber.png';

const Contacts = () => {
  return(
    <Fragment>
      <SpotContainer>
        <a rel="noopener noreferrer" href='https://github.com/tvasari' target="_blank">
          <img src={github} alt='github' className='info-img-top msi'/>
        </a>
      </SpotContainer>
      <SpotContainer>
        <a href='https://www.linkedin.com/in/tommaso-vasari-0ba8721a5/' target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt='linkedin' className='info-img-top msi'/>
        </a>
      </SpotContainer>
      <Logo />
      <SpotContainer>						
        <img src={email} alt='email-me' className='msi info-img-top email'/>
        <button type="button" onClick={() => console.log('use function to open email client')}>
          <SubSpot displayImage={email2} imageDescription="tommaso.vasari@gmail.com" />
        </button>
      </SpotContainer>
      <SpotContainer>
        <img src={mobile} alt='mobile' className='msi info-img-top mobile'/>
        <a href='tel:+39 3426822422'>
          <SubSpot displayImage={mobilenumber} imageDescription="+39 3426822422"/>  
        </a>
      </SpotContainer>
    </Fragment>
  );
}

export default Contacts;