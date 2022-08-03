import React, {useEffect} from 'react';
import './frame14.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight} from 'react-icons/fa'

const Frame14 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <>
        <div className='frame14Page'>
            <div className="d-flex justify-content-center"><div className='logomedionFrame14' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame14" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center"><h1 className='frame14NameTitle' data-aos="fade-up" data-aos-delay="200">Ходжамов Хуршид Астахович: </h1></div> <br />
            <div className="d-flex justify-content-center"><h1 className='frame14SubNameTitle' data-aos="fade-up" data-aos-delay="200">Выберите день для записи: </h1></div><br /><br />

            <div className="container">
              <div className="row frame14Row1" data-aos="zoom-in" data-aos-delay="200">
                  <div className="col-2 frame14Row1FirstCol">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame16"><p>Пн</p></Link>
                  </div>
                  <div className="col-2">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="#"><p>Вт</p></Link>
                  </div>
                  <div className="col-2">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="#"><p>Ср</p></Link>
                  </div>
                  <div className="col-2">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="#"><p>Чт</p></Link>
                  </div>
                  <div className="col-2">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="#"><p>Пт</p></Link>
                  </div>
                  <div className="col-2 frame14Row1LastCol">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="#"><p>Сб</p></Link>
                  </div>
              </div>
              <div className="row frame14Row2" data-aos="zoom-in" data-aos-delay="200">
                  <div className="col-2 frame14Row2FirstCol">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame16"><p>12:00-16:00</p></Link>
                  </div>
                  <div className="col-2">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="#"><p>12:00-16:00</p></Link>
                  </div>
                  <div className="col-2">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="#"><p>12:00-16:00</p></Link>
                    
                  </div>
                  <div className="col-2">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="#"><p>12:00-16:00</p></Link>
                  </div>
                  <div className="col-2">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="#"><p>12:00-16:00</p></Link>
                  </div>
                  <div className="col-2 frame14Row2LastCol">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="#"><p>12:00-16:00</p></Link>
                  </div>
              </div> <br />
              <div className="row" data-aos="zoom-in" data-aos-delay="200">
                <div className="col-1 redSpan"></div>
                <div className="col-11">
                  <p>Красным выделены дни, в которых нет свободных окон</p>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-center iconsRowFrame14">
                <div className="col-2 firstIconGroupFrame14">
                  <div className="d-flex justify-content-center iconsFrame14" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIconFrame14" aria-current="page" to="/"><AiFillHome className='iconHomeFrame14'/> <p className='domoyTextFrame14'>ДОМОЙ</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconFrame14" aria-current="page" to="/frame18"><FaRegArrowAltCircleRight className='iconNazadFrame14'/>  <p className='nazadTextFrame14'>НАЗАД</p></Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  );
};

export default Frame14;