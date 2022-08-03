import React, {useEffect}  from 'react';
import './frame1.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import { ImFacebook2 } from 'react-icons/im';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Frame1 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
    <div className='frame1Page'>

        <div class="d-flex justify-content-sm-center"><div className='logomedion' data-aos="zoom-in" data-aos-delay="200"></div></div>
        <div class="d-flex justify-content-center"><div className="textLogo" data-aos="zoom-in" data-aos-delay="200"></div></div>
      
        <div class="d-flex justify-content-center"><h1 className='welcomeText' data-aos="fade-up" data-aos-delay="200">ДОБРО ПОЖАЛВАТЬ! </h1></div>
        <div class="d-flex justify-content-center"><div>< MdOutlineKeyboardArrowDown className='rowIcon' data-aos="fade-up" data-aos-delay="300"/></div></div>

        <div class="d-flex justify-content-center">
          <Link className="nav-title-link-one nav-link nav-link-navbar active active-nav" aria-current="page" to="/frame2"> 
            <button className='frame1Button' data-aos="fade-up" data-aos-delay="100">НАЧАТЬ</button>
          </Link>
        </div>
        <div class="flex-container flex-containerFrame1">
          <div class="flex-item-left">
            <div class="flex-container flex-containerFrame1" data-aos="zoom-in" data-aos-delay="200">
              <div class="flex-item-start">
                <ImFacebook2/> @medionuz
                  <br />
                <AiOutlineInstagram/> @medionuz
              </div>
            </div>
          </div>
          <div class="flex-item-right">
            <div class="flex-container flex-containerFrame1 frame1FlexContainer">
              <div class="flex-item-right" data-aos="zoom-in" data-aos-delay="300">
                <p className='callCenterText'>CALL CENTER</p>
                <p className='shortNumber'> <BsTelephoneFill className='phoneIcon'/>1223</p>
              </div>
              <div class="flex-item-end " data-aos="zoom-in" data-aos-delay="400">
                78 140 00 10
                <br />
                78 120 00 22
                <br />
                78 120 00 33
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default Frame1;