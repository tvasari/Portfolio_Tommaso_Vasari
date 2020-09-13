import React from 'react';
import './SpotContainer.css';

const SpotContainer = ({ children }) => {
  return(
    <li className='layer' data-depth='0.5'>
      <div className='box-img'>
        { children }
      </div>
    </li>
  );
}

export default SpotContainer;