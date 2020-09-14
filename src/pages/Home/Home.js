import React, { Fragment } from 'react';
import Logo from 'components/Logo/Logo';
import SpotLink from 'components/SpotLink/SpotLink';
import SpotContainer from 'components/SpotContainer/SpotContainer';
import resume from 'immagini/resume.png';
import bio from 'immagini/bio.png';
import contacts from 'immagini/contacts.png';
import works from 'immagini/works.png';

const Home = () => {
  return(
    <Fragment>
      <SpotContainer>
        <SpotLink pageName="bio" displayImage={bio}/>
      </SpotContainer>
      <SpotContainer>
        <SpotLink pageName="contacts" displayImage={contacts}/>
      </SpotContainer>
      <Logo/>
      <SpotContainer>
        <SpotLink pageName="works" displayImage={works}/>
      </SpotContainer>
      <SpotContainer>
        <SpotLink pageName="resume" displayImage={resume}/>
      </SpotContainer>
    </Fragment>
  );
}

export default Home;