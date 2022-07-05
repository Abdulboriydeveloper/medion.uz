import React, {useEffect} from 'react';
import './frame6.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight} from 'react-icons/fa'

const Frame6 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame6Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame6' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame6" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav praysFrame6" aria-current="page" to="#"><h1 className='praysTextFrame6' >ПОЛИКЛИНИКА</h1></Link>
            </div>

            <div className="diagnostikaFrame6Container">
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostikaFrame6" aria-current="page" to="#"><h1 className='praysTextLittleFrame6'>ЛОР</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostikaFrame6" aria-current="page" to="#"><h1 className='praysTextLittleFrame6'>Травматолог</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostikaFrame6" aria-current="page" to="#"><h1 className='praysTextLittleFrame6'>Педиатр</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostikaFrame6" aria-current="page" to="#"><h1 className='praysTextLittleFrame6'>Кардиолог</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostikaFrame6" aria-current="page" to="#"><h1 className='praysTextLittleFrame6'>Невролог</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostikaFrame6" aria-current="page" to="#"><h1 className='praysTextLittleFrame6'>Гастроентеролог</h1></Link>
              </div>
            </div>

            <div className="d-flex justify-content-center iconsFrame6" data-aos="zoom-in" data-aos-delay="200">
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIcon" aria-current="page" to="/"><AiFillHome className='iconHome'/> <p className='domoyText'>ДОМОЙ</p></Link>
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIcon" aria-current="page" to="/frame4"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText'>НАЗАД</p></Link>
            </div>

        </div>
    </div>
  );
};

export default Frame6;