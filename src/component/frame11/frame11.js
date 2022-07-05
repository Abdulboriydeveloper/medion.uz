import React, {useEffect} from 'react';
import './frame11.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import Calculator from '../calc/Calculator';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight} from 'react-icons/fa';
import nfcCard from '../../assets/images/nfc.svg';

const Frame11 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame11Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame11' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame11" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center"><h1 className='разделText' data-aos="fade-up" data-aos-delay="200">МРТ головного мозга:</h1></div>

            <div className="container">
            <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="col-2 col2Frame11">
                <p className='justify-content-end frame11Text'>Введите ID пользователя:</p>
              </div>
              <div className="col-2 col2Frame11">
                <p className='justify-content-start frame11Text'>Приложите NFC карту:</p>
              </div>
            </div>
              <div className="row" data-aos="zoom-in" data-aos-delay="200">
                <div className="col-6" >
                  <Calculator/>
                </div>
                <div className="col-6 nfcCard">
                  <img className='nfcImg' src={nfcCard} alt="" />
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-center iconsRow">
                <div className="col-2 firstIconGroupFrame11">
                  <div className="d-flex justify-content-center iconsFrame11" data-aos="zoom-in" data-aos-delay="200">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIconFrame11" aria-current="page" to="/"><AiFillHome className='iconHome'/> <p className='domoyText'>ДОМОЙ</p></Link>
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIconFrame11" aria-current="page" to="/frame9"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText'>НАЗАД</p></Link>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
  );
};

export default Frame11;