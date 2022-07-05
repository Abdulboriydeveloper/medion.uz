import React from "react";
import "./styles/Buttons.css";
// import CALCULATOR_BUTTONS from "./CalculatorButtons";

const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) => {
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
        ⌫  
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
      <button className="btn btnFrame11  готовоBtn" >
        готово
      </button>
    </div>
  );
};

export default Buttons;
