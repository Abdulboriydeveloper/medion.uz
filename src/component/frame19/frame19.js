import React, {useEffect} from 'react';
import './frame19.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';

const Frame19 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame19Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame19' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame19" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center">
              <h1 className='frame19Text' data-aos="fade-up" data-aos-delay="200">Запись прошла успешно, возьмите чек!</h1>
            </div>



            <div className="container">
              <div className="row justify-content-center iconsRowFrame19">
                <div className="col-2 firstIconGroupFrame19">
                  <div className="d-flex justify-content-center iconsFrame19" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIconFrame19" aria-current="page" to="/"><AiFillHome className='iconHomeFrame19'/> <p className='domoyTextFrame19'>ДОМОЙ</p></Link>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
  );
};

export default Frame19;