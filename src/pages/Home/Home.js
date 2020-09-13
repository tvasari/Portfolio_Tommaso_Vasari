import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import resume from 'immagini/resume.png';
import bio from 'immagini/bio.png';
import contacts from 'immagini/contacts.png';
import works from 'immagini/works.png';
import LinkToPage from 'components/LinkToPage/LinkToPage';

const Home = () => {
  return(
    <Fragment>
      <ul id="scene" data-pointer-events="all">
        <LinkToPage pageName="bio" display={bio}/>
        <LinkToPage pageName="contacts" display={contacts}/>
        <Logo/>
        <LinkToPage pageName="works" display={works}/>
        <LinkToPage pageName="resume" display={resume}/>
      </ul>
    </Fragment>
  );
}

export default Home;