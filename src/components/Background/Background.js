import React, { Fragment } from 'react';
import background from 'immagini/f800px.gif';
import './Background.css';

const Background = ({ children }) => {
  
  return(
    <Fragment>
      <img src={background} alt='background' className='bg'/>			    
      { children }
    </Fragment>
  );
}

export default Background;