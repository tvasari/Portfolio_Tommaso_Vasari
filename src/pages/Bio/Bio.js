import React, { Fragment } from 'react';
import Logo from 'components/Logo/Logo';
import SpotContainer from 'components/SpotContainer/SpotContainer';
import SubSpot from 'components/SubSpot/SubSpot';
import location from 'immagini/location.png';
import rome from 'immagini/rome.png';
import occupation from 'immagini/occupation.png';
import fullstack from 'immagini/fullstack.png';
import speaks from 'immagini/speaks.png';
import lang from 'immagini/itaengspa.png';
import age from 'immagini/age.png';
import a28 from 'immagini/28.png';

const Bio = () => {
  return(
    <Fragment>
      <SpotContainer>
        <img src={location} alt='location' className='info-img-top msi'/>
        <SubSpot displayImage={rome} imageDescription="Rome, Italy"/>
      </SpotContainer>
      <SpotContainer>
        <img src={age} alt='age' className='side-img info-img-top msi'/>
        <SubSpot displayImage={a28} imageDescription="28"/>
      </SpotContainer>
      <Logo />
      <SpotContainer>
        <img src={occupation} alt='occupation' className='side-img info-img-top msi occupation'/>
        <SubSpot displayImage={fullstack} imageDescription="Fullstack"/>
      </SpotContainer>
      <SpotContainer>
        <img src={speaks} alt='speaks' className='side-img info-img-top msi speaks'/>
        <SubSpot displayImage={lang} imageDescription="Italian, English, Spanish"/>
      </SpotContainer>
    </Fragment>
  );
}

export default Bio;