import React, {useEffect} from 'react';
import './frame9.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft} from 'react-icons/fa'

const Frame9 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame9Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame9' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame9" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="container">
              <div class="flex-container flex-containerFrame9" data-aos="zoom-in" data-aos-delay="100">
                <div class="flex-item-left flex-item-rightFrame9">
                  <p className='frame9Text'>МРТ головного мозга</p>
                </div>
                <div class="flex-item-right flex-item-rightFrame9">
                  <div class="flex-container flex-containerFrame92">
                    <div class="flex-item-left">
                      <p className='frame9Number'>250.000</p>
                    </div>
                    <div class="flex-item-right flexItemBtn">
                      <button className='frame9Btn'>ЗАПИСЬ</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-container flex-containerFrame9" data-aos="zoom-in" data-aos-delay="100">
                <div class="flex-item-left flex-item-rightFrame9">
                  <p className='frame9Text'>МРТ область турецкого седла (гипофиз)</p>
                </div>
                <div class="flex-item-right flex-item-rightFrame9">
                  <div class="flex-container flex-containerFrame92">
                    <div class="flex-item-left">
                      <p className='frame9Number'>250.000</p>
                    </div>
                    <div class="flex-item-right flexItemBtn">
                      <button className='frame9Btn'>ЗАПИСЬ</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-container flex-containerFrame9" data-aos="zoom-in" data-aos-delay="150">
                <div class="flex-item-left flex-item-rightFrame9">
                  <p className='frame9Text'>МРТ головной мозг +гипофиз</p>
                </div>
                <div class="flex-item-right flex-item-rightFrame9">
                  <div class="flex-container flex-containerFrame92">
                    <div class="flex-item-left ">
                      <p className='frame9Number'>250.000</p>
                    </div>
                    <div class="flex-item-right flexItemBtn">
                      <button className='frame9Btn'>ЗАПИСЬ</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-container flex-containerFrame9" data-aos="zoom-in" data-aos-delay="200">
                <div class="flex-item-left flex-item-rightFrame9">
                  <p className='frame9Text'>МРТ головной мозг +орбиты</p>
                </div>
                <div class="flex-item-right flex-item-rightFrame9">
                  <div class="flex-container flex-containerFrame92">
                    <div class="flex-item-left">
                      <p className='frame9Number'>250.000</p>
                    </div>
                    <div class="flex-item-right flexItemBtn">
                      <button className='frame9Btn'>ЗАПИСЬ</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-container flex-containerFrame9" data-aos="zoom-in" data-aos-delay="200">
                <div class="flex-item-left flex-item-rightFrame9">
                  <p className='frame9Text'>МРТ головной мозг + ASL (перфузия)</p>
                </div>
                <div class="flex-item-right flex-item-rightFrame9">
                  <div class="flex-container flex-containerFrame92">
                    <div class="flex-item-left">
                      <p className='frame9Number'>250.000</p>
                    </div>
                    <div class="flex-item-right flexItemBtn">
                      <button className='frame9Btn'>ЗАПИСЬ</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-center iconsRow">
                <div className="col-2 firstIconGroupFrame9">
                  <div className="d-flex justify-content-center iconsFrame9" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIcon" aria-current="page" to="/"><AiFillHome className='iconHome'/> <p className='domoyText'>ДОМОЙ</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIcon" aria-current="page" to="/frame12"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText'>НАЗАД</p></Link>
                  </div>
                </div>
                <div className="col-2 secondIconGroupFrame9">
                  <div className="d-flex justify-content-center iconsFrame9" data-aos="zoom-in" data-aos-delay="200">
                  <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconLeft" aria-current="page" to="/frame8"><FaRegArrowAltCircleLeft className='iconNazad'/>  <p className='nazadText'>ПРЕД</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconRight" aria-current="page" to="/frame11"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText'>СЛЕД</p></Link>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
  );
};

export default Frame9;