import React from "react";
import DeliveryMethod from "../DeliveryMethod/DeliveryMethod";
import "./PaymentMethod.css";

const PaymentMethod = () => {
  return (
    <section className="pay-delivery-container">
      <h5>Payment Method</h5>
      <div className="payment-btn-container">
        <button className="payment-btn">
          <img
            className="paypal-logo"
            src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png"
            alt=""
          />
        </button>
        <button className="payment-btn visa-discover-btn">
          <img
            className="visa-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt=""
          />
        </button>
        <button className="payment-btn">
          <img
            className="mastercard-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png"
            alt=""
          />
        </button>
        <button className="payment-btn">
          <img
            className="maestro-logo"
            src="https://1000logos.net/wp-content/uploads/2021/05/Maestro-logo.png"
            alt=""
          />
        </button>
        <button className="payment-btn visa-discover-btn">
          <img
            className="discover-logo"
            src="https://www.pngkey.com/png/full/196-1968804_discover-credit-card-logo-png-discover-card-logo.png"
            alt=""
          />
        </button>
        <button className="payment-btn">
          <img
            className="ideal-logo"
            src="https://climbingtherighttree.com/wp-content/uploads/2017/12/ideal-logos.png"
            alt=""
          />
        </button>
      </div>
      <div>
        <DeliveryMethod />
      </div>
    </section>
  );
};

export default PaymentMethod;
