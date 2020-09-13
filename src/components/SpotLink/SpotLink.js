import React from 'react';
import { Link } from 'react-router-dom';
import './SpotLink.css';

const SpotLink = ({ pageName, displayImage }) => {
  return(
    <Link to={`/${pageName}`}>
      <img src={displayImage} alt={pageName} id="spot-link"/>
    </Link>
  );
}

export default SpotLink;