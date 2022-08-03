import React, {useEffect} from 'react';
import './frame8.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft} from 'react-icons/fa'

const Frame8 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame8Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame8' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame8" data-aos="zoom-in" data-aos-delay="100"></div></div>


            <div className="container frame8Container">
              <div className="row justify-content-center" >
                <div className="row justify-content-center" >
                  <div className="col-2 col2_Frame8" >
                    <div className="buttonFrame8" data-aos="fade-up" data-aos-delay="100">
                      <div className="row">
                        <div className="col"><span>МРТ головного мозга</span></div>
                      </div>
                      <Link className="nav-title-link nav-link nav-link-navbar active active-nav linkPadrobneBtn" aria-current="page" to="/frame9">
                        <button className='padrobneBtnFrame8'>ПОДРОБНЕЕ</button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-2 col2Frame8 ">
                    <div className="buttonFrame8" data-aos="fade-up" data-aos-delay="100">
                      <div className="row">
                        <div className="col"><span>МРТ Сосуды</span></div>
                      </div>
                      <Link className="nav-title-link nav-link nav-link-navbar active active-nav linkPadrobneBtn" aria-current="page" to="/frame9">
                        <button className='padrobneBtnFrame8'>ПОДРОБНЕЕ</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center" >
                <div className="row justify-content-center" >
                  <div className="col-2 col2_Frame8">
                    <div className="buttonFrame8" data-aos="fade-up" data-aos-delay="100">
                      <div className="row">
                        <div className="col"><span>МРТ Суставы</span></div>
                      </div>
                      <Link className="nav-title-link nav-link nav-link-navbar active active-nav linkPadrobneBtn" aria-current="page" to="/frame9">
                        <button className='padrobneBtnFrame8'>ПОДРОБНЕЕ</button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-2 col2Frame8">
                    <div className="buttonFrame8" data-aos="fade-up" data-aos-delay="100">
                      <div className="row">
                        <div className="col"><span>МРТ Мягкие ткани</span></div>
                      </div>
                      <Link className="nav-title-link nav-link nav-link-navbar active active-nav linkPadrobneBtn" aria-current="page" to="/frame9">
                        <button className='padrobneBtnFrame8'>ПОДРОБНЕЕ</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-center iconsRowFrame8">
                <div className="col-2 firstIconGroupFrame8">
                  <div className="d-flex justify-content-center iconsFrame8" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIconFrame8" aria-current="page" to="/"><AiFillHome className='iconHomeFrame8'/> <p className='domoyTextFrame8'>ДОМОЙ</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconFrame8" aria-current="page" to="/frame5"><FaRegArrowAltCircleRight className='iconNazadFrame8'/>  <p className='nazadTextFrame8'>НАЗАД</p></Link>
                  </div>
                </div>
                <div className="col-2 secondIconGroupFrame8">
                  <div className="d-flex justify-content-center iconsFrame8" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconLeftFrame8" aria-current="page" to="#"><FaRegArrowAltCircleLeft className='iconNazadFrame8'/>  <p className='nazadTextFrame8'>ПРЕД</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconRightFrame8" aria-current="page" to="#"><FaRegArrowAltCircleRight className='iconNazadFrame8'/>  <p className='nazadTextFrame8'>СЛЕД</p></Link>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
  );
};

export default Frame8;