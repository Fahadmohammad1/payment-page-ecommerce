import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import ShippingInfo from "../ShippingInfo.js/ShippingInfo";
import "./Payment.css";

const Payment = () => {
  return (
    <section>
      <div className="title-container">
        <h3 className="title">Shipping and Payment</h3>
        <div className="cart-truck">
          <h4 className="cart-icon">
            <FaShoppingCart />
          </h4>
          <h4 className="truck-icon">
            <FaTruck />
          </h4>
        </div>
      </div>
      <div className="main-container">
        <ShippingInfo />
        <div className="payment-cart-container">
          <PaymentMethod />
        </div>
      </div>
    </section>
  );
};

export default Payment;
