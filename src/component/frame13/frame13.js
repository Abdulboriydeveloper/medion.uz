import React, {useEffect} from 'react';
import './frame13.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft} from 'react-icons/fa';
import DoctorImg from '../../assets/images/doctorImg.webp';

const Frame13 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame13Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame13' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame13" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center"><h1 className='frame13Title' data-aos="fade-up" data-aos-delay="200">Педиатрия: </h1></div>

            <div className="container containerFrame13">
              <div class="d-flex justify-content-center frame13RowWrapper" data-aos="zoom-in" data-aos-delay="300">
                <div className="rowFrame13">
                  <div className="row">
                    <div className="col-3">
                      <img src={DoctorImg} alt="" />
                    </div>
                    <div className="col-6">
                      <h1>Ходжамов Хуршид Астахович</h1>
                      <p>педиатр высшей категории</p>
                    </div>
                    <div className="col-3">
                      <Link className="nav-title-link nav-link nav-link-navbar active active-nav frame13BtnLink" aria-current="page" to="/frame15"><button className='frame13Btn1'>ЗАПИСЬ</button></Link>
                      <Link className="nav-title-link nav-link nav-link-navbar active active-nav frame13BtnLink2" aria-current="page" to="/frame15"><button className='frame13Btn2'>ПОДРОБНЕЕ</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center frame13RowWrapper" data-aos="zoom-in" data-aos-delay="300">
                <div className="rowFrame13">
                  <div className="row">
                    <div className="col-3">
                      <img src={DoctorImg} alt="" />
                    </div>
                    <div className="col-6">
                      <h1>Ходжамов Хуршид Астахович</h1>
                      <p>педиатр высшей категории</p>
                    </div>
                    <div className="col-3">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav frame13BtnLink" aria-current="page" to="/frame15"><button className='frame13Btn1'>ЗАПИСЬ</button></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav frame13BtnLink2" aria-current="page" to="/frame15"><button className='frame13Btn2'>ПОДРОБНЕЕ</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center frame13RowWrapper" data-aos="zoom-in" data-aos-delay="400">
                <div className="rowFrame13">
                  <div className="row">
                    <div className="col-3">
                      <img src={DoctorImg} alt="" />
                    </div>
                    <div className="col-6">
                      <h1>Ходжамов Хуршид Астахович</h1>
                      <p>педиатр высшей категории</p>
                    </div>
                    <div className="col-3">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav frame13BtnLink" aria-current="page" to="/frame15"><button className='frame13Btn1'>ЗАПИСЬ</button></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav frame13BtnLink2" aria-current="page" to="/frame15"><button className='frame13Btn2'>ПОДРОБНЕЕ</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-center iconsRowFrame13">
                <div className="col-2 firstIconGroupFrame13">
                  <div className="d-flex justify-content-center iconsFrame13" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIconFframe13" aria-current="page" to="/"><AiFillHome className='iconHomeFrame13'/> <p className='domoyTextFrame13'>ДОМОЙ</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconFrame13" aria-current="page" to="/frame12"><FaRegArrowAltCircleRight className='iconNazadFrame13'/>  <p className='nazadTextFrame13'>НАЗАД</p></Link>
                  </div>
                </div>
                <div className="col-2 secondIconGroupFrame13">
                  <div className="d-flex justify-content-center iconsFrame13" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconLeftFrame13" aria-current="page" to="/frame12"><FaRegArrowAltCircleLeft className='iconNazad'/>  <p className='nazadText2Frame13'>ПРЕД</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconRightFrame13" aria-current="page" to="/frame25"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText2Frame13'>СЛЕД</p></Link>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
  );
};

export default Frame13;