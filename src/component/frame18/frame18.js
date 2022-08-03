import React, {useEffect} from 'react';
import './frame18.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight} from 'react-icons/fa';

const Frame18 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame18Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame18' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame18" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center"><h1 className='разделText' data-aos="fade-up" data-aos-delay="200">Ходжамов Хуршид Астахович:</h1></div>

            <div className="container">
              <div className="row" data-aos="zoom-in" data-aos-delay="200">
                <div className="col-6">
                  <div className='d-flex justify-content-end '>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav frame18Link" aria-current="page" to="/frame14">
                      <div className='divFrame18'>
                        <p className='frame18P'>ПРЕДВАРИТЕЛЬНАЯ <br /> ЗАПИСЬ</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-6">
                  <div className='d-flex justify-content-start'>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav frame18Link" aria-current="page" to="/frame11">
                      <div className='divFrame18'>
                        <p className='frame18P'>ЗАПИСЬ НА <br /> СЕГОДНЯ </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-center iconsRowFrame18">
                <div className="col-2 firstIconGroupFrame18">
                  <div className="d-flex justify-content-center iconsFrame18" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIconFrame18" aria-current="page" to="/"><AiFillHome className='iconHomeFrame18'/> <p className='domoyTextFrame18'>ДОМОЙ</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconFrame18" aria-current="page" to="/frame15"><FaRegArrowAltCircleRight className='iconNazadFrame18'/>  <p className='nazadTextFrame18'>НАЗАД</p></Link>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
  );
};

export default Frame18;