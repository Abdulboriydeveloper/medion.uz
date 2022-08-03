import React, {useEffect} from 'react';
import './frame21.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight} from 'react-icons/fa';
import Frame21Img from '../../assets/images/PNHONX01.png';
import Star from '../../assets/images/Star5.svg';

const Frame21 = () => {

  useEffect(()=>{
    AOS.init({})
  })

  return (
      <>
        <div className='frame21Page'>
            <div className="d-flex justify-content-center"><div className='logomedionFrame21' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame21" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center"><h1 className='frame21TitleText' data-aos="fade-up" data-aos-delay="200">оцените работу </h1></div>

            <div className="container containerFrame21">
              <div className='d-flex justify-content-center'>
                <div className="row d-flex justify-content-center rowFrame21" data-aos="zoom-in" data-aos-delay="200">
                  <div className="col-4">
                    <img className='imgFrame21' src={Frame21Img} alt="" />
                  </div>
                  <div className="col-8 col_8Frame21">
                    <p className='nameFrame21'>Исраилов Алишер </p>
                    <p className='subNameFrame21'>регистратура</p>
                    <div>
                      <span><img className='starImg1' src={Star} alt="" /></span>
                      <span><img className='starImg' src={Star} alt="" /></span>
                      <span><img className='starImg' src={Star} alt="" /></span>
                      <span><img className='starImg' src={Star} alt="" /></span>
                      <span><img className='starImg' src={Star} alt="" /></span>
                    </div>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav btnWrapperFrame21" aria-current="page" to="/frame15"><button className='frame21Btn'>ОЦЕНИТЬ РАБОТУ</button></Link>
                  </div>
                </div>
              </div>
            </div>
            <br /> <br />

            <div className="container">
              <div className="row justify-content-center iconsRowFrame21">
                <div className="col-2 firstIconGroupFrame21">
                  <div className="d-flex justify-content-center iconsFrame21" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIconFrame21" aria-current="page" to="/"><AiFillHome className='iconHomeFrame21'/> <p className='domoyTextFrame21'>ДОМОЙ</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconFrame21" aria-current="page" to="#"><FaRegArrowAltCircleRight className='iconNazadFrame21'/>  <p className='nazadTextFrame21'>НАЗАД</p></Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  );
};

export default Frame21;