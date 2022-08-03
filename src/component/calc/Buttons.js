import React from "react";
import "./styles/Buttons.css";
import { Link } from "react-router-dom";
import {ImArrowLeft} from 'react-icons/im';

const Buttons = ({ inputHandler,backspace }) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });

  return (
    <div className="show-btn">
      <button className="btn btnFrame11" onClick={inputHandler}>
        1
      </button>
      <button className="btn btnFrame11" onClick={inputHandler}>
        2
      </button>
      <button className="btn btnFrame11" onClick={inputHandler}>
        3
      </button>
      <button className="btn btnFrame11" onClick={inputHandler}>
        4
      </button>
      <button className="btn btnFrame11" onClick={inputHandler}>
        5
      </button>
      <button className="btn btnFrame11 clr" onClick={backspace}>
        <ImArrowLeft className="bachspaceIcon" />
      </button>
      <button className="btn btnFrame11" onClick={inputHandler}>
        6
      </button>
      <button className="btn btnFrame11" onClick={inputHandler}>
        7
      </button>
      <button className="btn btnFrame11" onClick={inputHandler}>
        8
      </button>
      <button className="btn btnFrame11" onClick={inputHandler}>
        9
      </button>
      <button className="btn btnFrame11" onClick={inputHandler}>
        0
      </button>
      <Link className="nav-title-link nav-link nav-link-navbar active active-nav готовоBtnLink" aria-current="page" to="/frame24">
        <button className="btn btnFrame11  готовоBtn">
          <p className="готовоBtnText">готово</p>
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
