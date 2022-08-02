import React from "react";
import "./PaymentMethod.css";

const PaymentMethod = () => {
  return (
    <section>
      <h4>Payment Method</h4>
      <div>
        <button className="payment-btn">
          <img
            className="paypal-logo"
            src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png"
            alt=""
          />
        </button>
      </div>
    </section>
  );
};

export default PaymentMethod;
