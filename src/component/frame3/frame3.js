import React, {useEffect} from 'react';
import './frame3.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {IoHomeSharp} from 'react-icons/io5';
import {FaRegArrowAltCircleRight} from 'react-icons/fa'

const Frame3 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame3Page'>
            
            <div class="d-flex justify-content-center"><div className='logomedionFrame3' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div class="d-flex justify-content-center"><div className="textLogoFrame3" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div class="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav prays" aria-current="page" to="/frame4"><h1 className='praysText' >ПРАЙС</h1></Link>
            </div>
            <div class="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="300">
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav vrachi" aria-current="page" to="/frame12"><h1 className='vrachText'>ВРАЧИ</h1></Link>
            </div>
            <div class="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="400">
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav otsenka" aria-current="page" to="/frame20"><h1 className='otsenkaText'>ОЦЕНКА РЕГИСТРАТУРЫ</h1></Link>
            </div>

            <div class="d-flex justify-content-center iconsFrame3" data-aos="zoom-in" data-aos-delay="200">
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIconFrame3" aria-current="page" to="/"><IoHomeSharp className='iconHomeFrame3'/> <p className='domoyText'>ДОМОЙ</p></Link>
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconFrame3" aria-current="page" to="/frame2"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadTextFrame3'>НАЗАД</p></Link>
            </div>

        </div>
    </div>
  );
};

export default Frame3;