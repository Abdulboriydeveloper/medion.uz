import React, {useEffect} from 'react';
import './frame12.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import BtnRowImg from '../../assets/images/rowVector.png';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft} from 'react-icons/fa'

const Frame12 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame12Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame12' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame12" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center"><h1 className='разделText' data-aos="fade-up" data-aos-delay="200">Выберите раздел: </h1></div>

            <div className="container" >
              <div className="row justify-content-center" >
                <div className="col-2 col2Frame12">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame13">
                  <button className="buttonFrame12" data-aos="fade-up" data-aos-delay="100">
                      <div className="row">
                        <div className="col">
                            <span className='frame12BtnText'>Педиатрия</span>
                        </div>
                        <div className="col"><p className='rowBtnSpan'><img className='rowBtnImg' src={BtnRowImg} alt="" /></p></div>
                      </div>
                  </button>
                </Link>
                </div>
                <div className="col-2 col2Frame12">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame13">
                  <button className="buttonFrame12" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                      <div className="col">
                        <span className='frame12BtnText'>Терапия</span>
                      </div>
                      <div className="col"><p className='rowBtnSpan'><img className='rowBtnImg' src={BtnRowImg} alt="" /></p></div>
                    </div>
                  </button>
                </Link>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-2 col2Frame12">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame13">
                  <button className="buttonFrame12" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                      <div className="col">
                          <span className='frame12BtnText'>Хирургия</span>
                      </div>
                      <div className="col"><p className='rowBtnSpan'><img className='rowBtnImg' src={BtnRowImg} alt="" /></p></div>
                    </div>
                  </button>
                </Link>
                </div>
                <div className="col-2 col2Frame12">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame13">
                  <button className="buttonFrame12" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                      <div className="col">
                          <span className='frame12BtnText'>Офтальмология</span>
                      </div>
                      <div className="col"><p className='rowBtnSpan'><img className='rowBtnImg' src={BtnRowImg} alt="" /></p></div>
                    </div>
                  </button>
                </Link>
                </div>
              </div>
              <div className="row justify-content-center" >
                <div className="col-2 col2Frame12">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame13">
                  <button className="buttonFrame12" data-aos="fade-up" data-aos-delay="100">
                      <div className="row">
                        <div className="col">
                            <span className='frame12BtnText'>Педиатрия</span>
                        </div>
                        <div className="col"><p className='rowBtnSpan'><img className='rowBtnImg' src={BtnRowImg} alt="" /></p></div>
                      </div>
                  </button>
                </Link>
                </div>
                <div className="col-2 col2Frame12">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame13">
                  <button className="buttonFrame12" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                      <div className="col">
                        <span className='frame12BtnText'>Терапия</span>
                      </div>
                      <div className="col"><p className='rowBtnSpan'><img className='rowBtnImg' src={BtnRowImg} alt="" /></p></div>
                    </div>
                  </button>
                </Link>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-2 col2Frame12">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame13">
                  <button className="buttonFrame12" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                      <div className="col">
                          <span className='frame12BtnText'>Хирургия</span>
                      </div>
                      <div className="col"><p className='rowBtnSpan'><img className='rowBtnImg' src={BtnRowImg} alt="" /></p></div>
                    </div>
                  </button>
                </Link>
                </div>
                <div className="col-2 col2Frame12">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame13">
                  <button className="buttonFrame12" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                      <div className="col">
                          <span className='frame12BtnText'>Офтальмология</span>
                      </div>
                      <div className="col"><p className='rowBtnSpan'><img className='rowBtnImg' src={BtnRowImg} alt="" /></p></div>
                    </div>
                  </button>
                </Link>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-center iconsRow">
                <div className="col-2 firstIconGroupFrame12">
                  <div className="d-flex justify-content-center iconsFrame12" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIcon" aria-current="page" to="/"><AiFillHome className='iconHome'/> <p className='domoyText'>ДОМОЙ</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIcon" aria-current="page" to="/frame3"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText'>НАЗАД</p></Link>
                  </div>
                </div>
                <div className="col-2 secondIconGroupFrame12">
                  <div className="d-flex justify-content-center iconsFrame12" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconLeft" aria-current="page" to="/frame3"><FaRegArrowAltCircleLeft className='iconNazad'/>  <p className='nazadText'>ПРЕД</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconRight" aria-current="page" to="/frame8"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText'>СЛЕД</p></Link>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
  );
};

export default Frame12;