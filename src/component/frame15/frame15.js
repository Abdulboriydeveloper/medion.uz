import React, {useEffect} from 'react';
import './frame15.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft} from 'react-icons/fa'

const Frame15 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame15Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame15' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame15" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center"><h1 className='frame15NameTitle' data-aos="fade-up" data-aos-delay="200">Ходжамов Хуршид Астахович: </h1></div>

            <div className="container">
              <div class="flex-container flex-containerFrame15" data-aos="zoom-in" data-aos-delay="100">
                <div class="flex-item-left flex-item-rightFrame15">
                  <p className='frame15Text'>Консультация</p>
                </div>
                <div class="flex-item-right flex-item-rightFrame15">
                  <div class="flex-container flex-containerFrame152">
                    <div class="flex-item-left flex-item-leftFrame15">
                      <p className='frame15Number'>50.000</p>
                    </div>
                    <div class="flex-item-right flexItemBtn15">
                      <Link className="nav-title-link nav-link nav-link-navbar active active-nav frame15BtnLink" aria-current="page" to="/frame18"><button className='frame15Btn1'>ЗАПИСЬ</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-container flex-containerFrame15" data-aos="zoom-in" data-aos-delay="100">
                <div class="flex-item-left flex-item-rightFrame15">
                  <p className='frame15Text'>Процедура 1</p>
                </div>
                <div class="flex-item-right flex-item-rightFrame15">
                  <div class="flex-container flex-containerFrame152">
                    <div class="flex-item-left flex-item-leftFrame15">
                      <p className='frame15Number'>250.000</p>
                    </div>
                    <div class="flex-item-right flexItemBtn15">
                      <Link className="nav-title-link nav-link nav-link-navbar active active-nav frame15BtnLink" aria-current="page" to="/frame18"><button className='frame15Btn1'>ЗАПИСЬ</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-container flex-containerFrame15" data-aos="zoom-in" data-aos-delay="100">
                <div class="flex-item-left flex-item-rightFrame15">
                  <p className='frame15Text'>Процедура 2</p>
                </div>
                <div class="flex-item-right flex-item-rightFrame15">
                  <div class="flex-container flex-containerFrame152">
                    <div class="flex-item-left flex-item-leftFrame15">
                      <p className='frame15Number'>250.000</p>
                    </div>
                    <div class="flex-item-right flexItemBtn15">
                      <Link className="nav-title-link nav-link nav-link-navbar active active-nav frame15BtnLink" aria-current="page" to="/frame18"><button className='frame15Btn1'>ЗАПИСЬ</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-container flex-containerFrame15" data-aos="zoom-in" data-aos-delay="100">
                <div class="flex-item-left flex-item-rightFrame15">
                  <p className='frame15Text'>Процедура 3</p>
                </div>
                <div class="flex-item-right flex-item-rightFrame15">
                  <div class="flex-container flex-containerFrame152">
                    <div class="flex-item-left flex-item-leftFrame15">
                      <p className='frame15Number'>250.000</p>
                    </div>
                    <div class="flex-item-right flexItemBtn15">
                      <Link className="nav-title-link nav-link nav-link-navbar active active-nav frame15BtnLink" aria-current="page" to="/frame18"><button className='frame15Btn1'>ЗАПИСЬ</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-container flex-containerFrame15" data-aos="zoom-in" data-aos-delay="100">
                <div class="flex-item-left flex-item-rightFrame15">
                  <p className='frame15Text'>Процедура 4</p>
                </div>
                <div class="flex-item-right flex-item-rightFrame15">
                  <div class="flex-container flex-containerFrame152">
                    <div class="flex-item-left flex-item-leftFrame15">
                      <p className='frame15Number'>250.000</p>
                    </div>
                    <div class="flex-item-right flexItemBtn15">
                      <Link className="nav-title-link nav-link nav-link-navbar active active-nav frame15BtnLink" aria-current="page" to="/frame18"><button className='frame15Btn1'>ЗАПИСЬ</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-center iconsRow">
                <div className="col-2 firstIconGroupFrame15">
                  <div className="d-flex justify-content-center iconsFrame15" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIconFrame15" aria-current="page" to="/"><AiFillHome className='iconHomeFrame15'/> <p className='domoyTextFrame15'>ДОМОЙ</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconFrame15" aria-current="page" to="/frame13"><FaRegArrowAltCircleRight className='iconNazadFrame15'/>  <p className='nazadTextFrame15'>НАЗАД</p></Link>
                  </div>
                </div>
                <div className="col-2 secondIconGroupFrame15">
                  <div className="d-flex justify-content-center iconsFrame15" data-aos="zoom-in" data-aos-delay="200">
                  <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconLeftFrame15" aria-current="page" to="#"><FaRegArrowAltCircleLeft className='iconNazad'/>  <p className='nazadTextFrame15'>ПРЕД</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconRightFrame15" aria-current="page" to="#"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadTextFrame15'>СЛЕД</p></Link>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
  );
};

export default Frame15;