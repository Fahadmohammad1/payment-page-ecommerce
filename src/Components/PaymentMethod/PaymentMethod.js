import React from "react";
import "./PaymentMethod.css";

const PaymentMethod = () => {
  return (
    <section>
      <h4>Payment Method</h4>
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
            src="https://banner2.cleanpng.com/20180601/ihg/kisspng-ideal-e-commerce-payment-system-bank-logo-hot-5b1110d1c66724.1981524615278450738127.jpg"
            alt=""
          />
        </button>
      </div>
    </section>
  );
};

export default PaymentMethod;
