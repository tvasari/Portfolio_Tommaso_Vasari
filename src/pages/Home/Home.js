import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import resume from 'immagini/resume.png';
import bio from 'immagini/bio.png';
import contacts from 'immagini/contacts.png';
import works from 'immagini/works.png';

const Home = () => {
  return(
    <Fragment>
      <ul id="scene" data-pointer-events="all">
        <li className='layer no-logo' data-depth='0.7'>
          <Link to="/bio">
            <div className='box-img'>
              <img src={bio} alt='' className='click bio side-img msi'/>
            </div>
          </Link>
        </li>
        <li onClick={(e) => this.changeRoute('contacts')} className='layer no-logo' data-depth='0.7'>
          <div className='box-img'>
            <img src={contacts} alt='' className='click contacts side-img msi'/>
          </div>
        </li>
        <Logo/>
        <li onClick={() => this.changeRoute('works')} className='layer no-logo' data-depth='0.7'>
          <div className='box-img'>
            <img src={works} alt='' className='click works side-img msi'/>
          </div>
        </li>
        <li className='layer no-logo' data-depth='0.7'>
          <div className='box-img'>
            <a href='https://tvasari.github.io/' rel="noopener noreferrer" target="_blank">
              <img src={resume} alt='' className='click resume side-img msi'/>
            </a>
          </div>
        </li>
      </ul>
    </Fragment>
  );
}

export default Home;