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
              <div class="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="300">
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
                      <button className='frame13Btn1'>ЗАПИСЬ</button>
                      <button className='frame13Btn2'>ПОДРОБНЕЕ</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="300">
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
                      <button className='frame13Btn1'>ЗАПИСЬ</button>
                      <button className='frame13Btn2'>ПОДРОБНЕЕ</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="400">
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
                      <button className='frame13Btn1'>ЗАПИСЬ</button>
                      <button className='frame13Btn2'>ПОДРОБНЕЕ</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-center iconsRow">
                <div className="col-2 firstIconGroupFrame13">
                  <div className="d-flex justify-content-center iconsFrame13" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIcon" aria-current="page" to="/"><AiFillHome className='iconHome'/> <p className='domoyText'>ДОМОЙ</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIcon" aria-current="page" to="/frame12"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText'>НАЗАД</p></Link>
                  </div>
                </div>
                <div className="col-2 secondIconGroupFrame13">
                  <div className="d-flex justify-content-center iconsFrame13" data-aos="zoom-in" data-aos-delay="200">
                  <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconLeft" aria-current="page" to="#"><FaRegArrowAltCircleLeft className='iconNazad'/>  <p className='nazadText'>ПРЕД</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconRight" aria-current="page" to="#"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText'>СЛЕД</p></Link>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
  );
};

export default Frame13;