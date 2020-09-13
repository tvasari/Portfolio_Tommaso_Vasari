import React, { Fragment } from 'react';
import Logo from 'components/Logo/Logo';
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
      <ul id="scene" data-pointer-events="all">
        <li className='layer side-layer no-logo' data-depth='0.7'>
          <div className='box-img'>
            <img src={location} alt='' className='side-img info-img-top msi location'/>
            <div className='mini-box'>
              <img src={rome} alt='' className='side-img info-img-bot'/>
              <div className='search rome'></div>
            </div>
          </div>
        </li>
        <li className='layer side-layer no-logo' data-depth='0.7'>
          <div className='box-img'>
            <img src={age} alt='' className='side-img info-img-top msi'/>
            <div className='mini-box'>
              <img src={a28} alt='' className='side-img info-img-bot'/>
              <div className='search a28'></div>
            </div>
          </div>						
        </li>
        <Logo />
        <li className='layer side-layer no-logo' data-depth='0.7'>
          <div className='box-img'>
            <img src={occupation} alt='' className='side-img info-img-top msi occupation'/>
            <div className='mini-box'>
              <img src={fullstack} alt='' className='side-img info-img-bot fullstack'/>
              <div className='search fullstack'></div>
            </div>
          </div>						
        </li>
        <li className='layer side-layer no-logo' data-depth='0.7'>
          <div className='box-img'>
            <img src={speaks} alt='' className='side-img info-img-top msi speaks'/>
            <div className='mini-box'>
              <img src={lang} alt='' className='side-img info-img-bot lang'/>
              <div className='search lang'></div>
            </div>
          </div>							
        </li>
      </ul>
    </Fragment>
  );
}

export default Bio;