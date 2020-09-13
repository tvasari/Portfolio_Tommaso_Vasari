import React from 'react';
import './SubSpot.css';

const SubSpot = ({ displayImage, imageDescription }) => {
  return(
    <div className='mini-box'>
      <img src={displayImage} alt={imageDescription} className='sub-spot'/>
      <div className='underscore'></div>
    </div>
  );
}

export default SubSpot;
