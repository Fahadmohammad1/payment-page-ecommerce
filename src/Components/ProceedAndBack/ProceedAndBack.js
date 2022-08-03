import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./ProceedAndBack.css";

const ProceedAndBack = () => {
  return (
    <div className="proceed-back-div">
      <div className="back-arrow">
        <span>
          <FaArrowLeft />
        </span>
        <span>Back</span>
      </div>
      <div>
        <button className="continue-proceed-btns continue-btn">
          CONTINUE SHOPPING
        </button>{" "}
        <button className="continue-proceed-btns proceed-btn">
          PROCEED TO PAYMENT
        </button>
      </div>
    </div>
  );
};

export default ProceedAndBack;
