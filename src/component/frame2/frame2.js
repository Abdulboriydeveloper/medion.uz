import React, {useEffect} from 'react';
import './frame2.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import Img1 from '../../assets/images/shoxHospital1.webp';
import Img2 from '../../assets/images/shoxHospital2.jpg';
import Img3 from '../../assets/images/shoxHospital3.jpg';
import { MdArrowForwardIos } from 'react-icons/md';

const Frame2 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame2Page'>
            <div className="d-flex justify-content-start  mb-3">
              <div ><div className="vector1Frame2"></div></div>
            </div>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame2' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame2" data-aos="zoom-in" data-aos-delay="100"></div></div>
            
            <div className="container frame2Container" data-aos="zoom-in-down">
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6 " data-aos="zoom-in-down" data-aos-delay="200">
                  <div className="service-box blue"> 
                    <center><img className='img1' src={Img1} alt="" /></center>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 arrowFrameWrapper" data-aos="zoom-in-down" data-aos-delay="300">
                  <div className="service-box orange"> 
                    <center><MdArrowForwardIos className='arrowFrame2'/></center>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="zoom-in-down" data-aos-delay="400">
                    <div className="service-box green"> 
                    <Link className="nav-title-link-one nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame3"> 
                      <center><h3 className='frame2MedionText'>MEDION 1</h3></center>
                    </Link>
                    </div>
                </div>
              </div>
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6 " data-aos="zoom-in-down" data-aos-delay="200">
                  <div className="service-box blue"> 
                    <center><img className='img1' src={Img2} alt="" /></center>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 arrowFrameWrapper" data-aos="zoom-in-down" data-aos-delay="300">
                  <div className="service-box orange"> 
                  <center><MdArrowForwardIos className='arrowFrame2'/></center>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="zoom-in-down" data-aos-delay="400">
                    <div className="service-box green"> 
                      <Link className="nav-title-link-one nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame3"> 
                        <center><h3 className='frame2MedionText'>MEDION 2</h3></center>
                      </Link>
                    </div>
                </div>
              </div>
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6 " data-aos="zoom-in-down" data-aos-delay="200">
                  <div className="service-box blue"> 
                    <center><img className='img1' src={Img3} alt="" /></center>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 arrowFrameWrapper" data-aos="zoom-in-down" data-aos-delay="300">
                  <div className="service-box orange"> 
                  <center><MdArrowForwardIos className='arrowFrame2'/></center>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="zoom-in-down" data-aos-delay="400">
                    <div className="service-box green"> 
                      <Link className="nav-title-link-one nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame3"> 
                        <center><h3 className='frame2MedionText'>MEDION 3</h3></center>
                      </Link>
                    </div>
                </div>
              </div>
            </div>

          </div>
    </div>
  );
};

export default Frame2;