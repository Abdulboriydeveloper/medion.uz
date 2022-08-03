import React, {useEffect} from 'react';
import './frame23.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';

const Frame23 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame23Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame23' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame23" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center">
              <h1 className='frame23Text' data-aos="fade-up" data-aos-delay="200">Благодарим вас за оценку!</h1>
            </div>



            <div className="container">
              <div className="row justify-content-center iconsRowFrame23">
                <div className="col-2 firstIconGroupFrame23">
                  <div className="d-flex justify-content-center iconsFrame23" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIconFrame23" aria-current="page" to="/"><AiFillHome className='iconHomeFrame23'/> <p className='domoyTextFrame23'>ДОМОЙ</p></Link>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
  );
};

export default Frame23;