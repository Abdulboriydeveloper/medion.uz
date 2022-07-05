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


            <div className="container" >
              <div className="row justify-content-center" >
                <div className="row justify-content-center" >
                  <div className="col-2 col2Frame8" >
                    <div className="buttonFrame8" data-aos="fade-up" data-aos-delay="100">
                      <div className="row">
                        <div className="col"><span>МРТ головного мозга</span></div>
                      </div>
                      <button className='padrobneBtnFrame8'>ПОДРОБНЕЕ</button>
                    </div>
                  </div>
                  <div className="col-2 col2Frame8">
                    <div className="buttonFrame8" data-aos="fade-up" data-aos-delay="100">
                      <div className="row">
                        <div className="col"><span>МРТ Сосуды</span></div>
                      </div>
                      <button className='padrobneBtnFrame8'>ПОДРОБНЕЕ</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center" >
                <div className="row justify-content-center" >
                  <div className="col-2 col2Frame8">
                    <div className="buttonFrame8" data-aos="fade-up" data-aos-delay="100">
                      <div className="row">
                        <div className="col"><span>МРТ Суставы</span></div>
                      </div>
                      <button className='padrobneBtnFrame8'>ПОДРОБНЕЕ</button>
                    </div>
                  </div>
                  <div className="col-2 col2Frame8">
                    <div className="buttonFrame8" data-aos="fade-up" data-aos-delay="100">
                      <div className="row">
                        <div className="col"><span>МРТ Мягкие ткани</span></div>
                      </div>
                      <button className='padrobneBtnFrame8'>ПОДРОБНЕЕ</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-center iconsRow">
                <div className="col-2 firstIconGroupFrame8">
                  <div className="d-flex justify-content-center iconsFrame8" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIcon" aria-current="page" to="/"><AiFillHome className='iconHome'/> <p className='domoyText'>ДОМОЙ</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIcon" aria-current="page" to="/frame12"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText'>НАЗАД</p></Link>
                  </div>
                </div>
                <div className="col-2 secondIconGroupFrame8">
                  <div className="d-flex justify-content-center iconsFrame8" data-aos="zoom-in" data-aos-delay="200">
                  <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconLeft" aria-current="page" to="/frame12"><FaRegArrowAltCircleLeft className='iconNazad'/>  <p className='nazadText'>ПРЕД</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconRight" aria-current="page" to="/frame9"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText'>СЛЕД</p></Link>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
  );
};

export default Frame8;