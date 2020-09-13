import React from 'react';
import { Link } from 'react-router-dom';
import './LinkToPage.css';

const LinkToPage = ({ pageName, display }) => {

  return(
    <li className='layer' data-depth='0.5'>
      <Link to={`/${pageName}`}>
        <div className='box-img'>
          <img src={display} alt={`${pageName}`} id="home-link"/>
        </div>
      </Link>
    </li>
  );
}

export default LinkToPage;