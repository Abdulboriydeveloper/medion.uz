import React, {useEffect} from 'react';
import './frame20.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome, AiFillLike, AiFillDislike} from 'react-icons/ai';
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import DoctorImg from '../../assets/images/doctorImg.webp';
import likeImg from '../../assets/images/like.png';

const Frame20 = () => {
  useEffect(()=>{
    AOS.init({})
  });
  return (
      <>
        <div className='frame20Page'>
            <div class="d-flex justify-content-center"><div className='logomedionFrame20' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div class="d-flex justify-content-center"><div className="textLogoFrame20" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div class="d-flex justify-content-center"><h1 className='frame20Title' data-aos="fade-up" data-aos-delay="200">Оцените пожалуйста работу <br /> сотрудников регистратуры: </h1></div>

            <div className="container">
              <div class="grid-container grid-containerFrame20" >
                <div class="item1">
                  <img className='cardImg' src={DoctorImg} alt="" />
                  <h4>Исраилов Алишер </h4>
                  {/* <img src={likeImg} alt="" /> */}
                  <span className='likeSpan'><AiFillLike className='likeIcon'/></span> <span className='dislikeSpan'><AiFillDislike className='dislikeIcon'/></span>
                </div>
                <div class="item2">
                  <img className='cardImg' src={DoctorImg} alt="" />
                  <h4>Исраилов Алишер </h4>
                  <span className='likeSpan'><AiFillLike className='likeIcon'/></span> <span className='dislikeSpan'><AiFillDislike className='dislikeIcon'/></span>
                </div>
                <div class="item3">
                  <img className='cardImg' src={DoctorImg} alt="" />
                  <h4>Исраилов Алишер </h4>
                  <span className='likeSpan'><AiFillLike className='likeIcon'/></span> <span className='dislikeSpan'><AiFillDislike className='dislikeIcon'/></span>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-center iconsFrame20" data-aos="zoom-in" data-aos-delay="200">
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIcon" aria-current="page" to="/"><AiFillHome className='iconHome'/> <p className='domoyText'>ДОМОЙ</p></Link>
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIcon" aria-current="page" to="/frame3"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText'>НАЗАД</p></Link>
            </div>
        </div>
    </>
  );
};
export default Frame20;