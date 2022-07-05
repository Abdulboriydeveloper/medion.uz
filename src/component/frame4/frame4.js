import React, {useEffect} from 'react';
import './frame4.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight} from 'react-icons/fa'

const Frame4 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame4Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame4' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame4" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav praysFrame4" aria-current="page" to="#"><h1 className='praysText' >ПРАЙС</h1></Link>
            </div>

            <div className="diagnostikaContainer">
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostika" aria-current="page" to="/frame5"><h1 className='praysTextLittle'>Диагностика</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostika" aria-current="page" to="/frame6"><h1 className='praysTextLittle'>Поликлиника</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostika" aria-current="page" to="#"><h1 className='praysTextLittle'>Лаборатория</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostika" aria-current="page" to="#"><h1 className='praysTextLittle'>Операция</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostika" aria-current="page" to="#"><h1 className='praysTextLittle'>Стоматология</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostika" aria-current="page" to="#"><h1 className='praysTextLittle'>Косметология</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostika" aria-current="page" to="#"><h1 className='praysTextLittle'>СПA</h1></Link>
              </div>
            </div>

            <div className="d-flex justify-content-center iconsFrame4" data-aos="zoom-in" data-aos-delay="200">
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIcon" aria-current="page" to="/"><AiFillHome className='iconHome'/> <p className='domoyText'>ДОМОЙ</p></Link>
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIcon" aria-current="page" to="/frame3"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText'>НАЗАД</p></Link>
            </div>

        </div>
    </div>
  );
};

export default Frame4;