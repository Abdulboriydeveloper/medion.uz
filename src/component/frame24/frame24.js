import React, {useEffect} from 'react';
import './frame24.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight} from 'react-icons/fa'

const Frame24 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame24Page'>
            <div class="d-flex justify-content-center"><div className='logomedionFrame24' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div class="d-flex justify-content-center"><div className="textLogoFrame24" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center"><h1 className='разделText' data-aos="fade-up" data-aos-delay="200">Подтвердите заявку</h1></div>

            <div className='d-flex justify-content-center'><div className='nameInput' data-aos="zoom-in" data-aos-delay="200">
              <p className='nameInputText'> <br /> Алимов Алишер Шухратович</p>
            </div></div>
            <div className='d-flex justify-content-center inputWrapper' data-aos="zoom-in" data-aos-delay="200">
              <span className='dateInput'><br /> <p className="dateText">20.01.1995 г.р.</p> </span>
              <span className='idInput'><br /> <p className="idText">ID: 1292983</p> </span>
              <span className='polInput'><br /> <p className="polText">Пол: мужской</p> </span>
            </div>

            <div className='d-flex justify-content-center' data-aos="zoom-in" data-aos-delay="200"> 
            <Link className="nav-title-link nav-link nav-link-navbar active active-nav btnLinkFrame24" aria-current="page" to="/frame23">
              <button className='frame24Btn'>Записаться</button>
            </Link>
            </div>
            

            <div class="d-flex justify-content-center iconsFrame24" data-aos="zoom-in" data-aos-delay="200">
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIconFrame24" aria-current="page" to="/"><AiFillHome className='iconHomeFrame24'/> <p className='domoyTextFrame24'>ДОМОЙ</p></Link>
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconFrame24" aria-current="page" to="/frame11"><FaRegArrowAltCircleRight className='iconNazadFrame24'/>  <p className='nazadTextFrame24'>НАЗАД</p></Link>
            </div>
        </div>
    </div>
  );
};

export default Frame24;