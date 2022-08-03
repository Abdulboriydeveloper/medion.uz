import React, {useEffect} from 'react';
import './frame25.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight} from 'react-icons/fa';
import imgFrame25 from '../../assets/images/PNHONX01.png';

const Frame25 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame11Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame11' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame11" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <br />
            <div className="container">
              <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <div className="col-md-6 colFrame25">
                  <img className='imgFrame25' src={imgFrame25} alt="" />
                </div>
                <div className="col-md-2 col2Frame25">
                  <p className='nameFrame25'>Ходжамов Хуршид Астахович</p>
                  <p className='subName'>педиатр высшей категории</p>
                  <span className='span1Frame25'>Стаж работы: </span> <span className='span2Frame25'>5 лет</span>
                  <br />
                  <span className='span1Frame25'>Образование: </span> <p className='span22Frame25'>Национальный <br /> медицинский институт <br /> Ташкента СОГРШ</p>
                  </div>
              </div>
              <br /> 
              <div className="row justify-content-center">
                <div className="col-5 col5rame25" data-aos="zoom-in" data-aos-delay="200">
                  <p className='frame25Text'>Текст о его врачебной практике и опыте <br />
                    Текст о его врачебной практике и опытеТекст о его врачебной практике и <br />
                    опытеТекст о его врачебной практике и опытеТекст о его врачебной <br />
                    практике и опыте Текст о его врачебной практике и опытеТекст о его <br /> 
                    врачебной практике и опытеТекст о его врачебной практике и опыте
                  </p>
                  <br />
                  <button className='btnFrame25'>ЗАПИСЬ</button>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-center iconsRowFrame25">
                <div className="col-2 firstIconGroupFrame11">
                  <div className="d-flex justify-content-center iconsFrame11" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIconFrame25" aria-current="page" to="/"><AiFillHome className='iconHomeFrame25'/> <p className='domoyTextFrame25'>ДОМОЙ</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconFrame25" aria-current="page" to="/frame13"><FaRegArrowAltCircleRight className='iconNazadFrame25'/>  <p className='nazadTextFrame25'>НАЗАД</p></Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Frame25;