import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';


const footer = () => {
  return (
      <div className='footer'>
        <div className="d-flex justify-content-center"> 
          <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="#">
            <h1 className="d-flex justify-content-center footerText">www.medion.uz</h1>
          </Link>
        </div>
      </div>
  );
};

export default footer;