import React, {useEffect} from 'react';
import './frame16.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight} from 'react-icons/fa'

const Frame16 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame16Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame16' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame16" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center"><h1 className='frame16NameTitle' data-aos="fade-up" data-aos-delay="200">Ходжамов Хуршид Астахович: </h1></div>
            <div className="d-flex justify-content-center"><p className='frame16SubNameTitle' data-aos="fade-up" data-aos-delay="200">Выберите время для записи: </p></div>

            <div className="container containerFrame16">
              <div className="d-flex justify-content-start"><p className='frame16WeekText' data-aos="fade-up" data-aos-delay="200">Понедельник</p></div>
                <div className="row flex-containerFrame16" data-aos="zoom-in" data-aos-delay="100">
                  <div className="col-6 d-flex justify-content-start">
                      <p className='frame16Time'>17:00-18:00</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <button className='frame16Btn'>ЗАПИСЬ</button>
                  </div>
                </div>
                <div className="row flex-containerFrame16" data-aos="zoom-in" data-aos-delay="100">
                  <div className="col-6 d-flex justify-content-start">
                      <p className='frame16Time'>18:00-19:00</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <button className='frame16Btn'>ЗАПИСЬ</button>
                  </div>
                </div>
                <div className="row flex-containerFrame16" data-aos="zoom-in" data-aos-delay="100">
                  <div className="col-6 d-flex justify-content-start">
                      <p className='frame16Time'>19:30-20:00</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <button className='frame16Btn'>ЗАПИСЬ</button>
                  </div>
                </div>
            </div>

            <div className="container">
              <div className="row justify-content-center iconsRowFrame16">
                <div className="col-2 firstIconGroupFrame16">
                  <div className="d-flex justify-content-center iconsFrame16" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIconFrame16" aria-current="page" to="/"><AiFillHome className='iconHomeFrame16'/> <p className='domoyTextFrame16'>ДОМОЙ</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconFrame16" aria-current="page" to="/frame14"><FaRegArrowAltCircleRight className='iconNazadFrame16'/>  <p className='nazadTextFrame16'>НАЗАД</p></Link>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
  );
};

export default Frame16;