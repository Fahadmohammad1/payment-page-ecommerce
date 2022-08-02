import React from "react";
import "./DeliveryMethod.css";

const DeliveryMethod = () => {
  return (
    <section>
      <h5>Delivery Method</h5>
      <div className="delivery-btn-container">
        <button className="delivery-btns">
          {" "}
          <img
            className="inpost-logo"
            src="https://seeklogo.com/images/I/inpost-logo-F04BCA29D0-seeklogo.com.png"
            alt=""
          />{" "}
          $20.00
        </button>
        <button className="delivery-btns">
          {" "}
          <img
            className="dpd-logo"
            src="https://logos-world.net/wp-content/uploads/2021/02/DPD-Emblem.png"
            alt=""
          />{" "}
          $12.00
        </button>
        <button className="delivery-btns">
          {" "}
          <img
            className="dhl-logo"
            src="https://download.logo.wine/logo/DHL/DHL-Logo.wine.png"
            alt=""
          />{" "}
          $15.00
        </button>
        <button className="delivery-btns">
          {" "}
          <img
            className="fedex-logo"
            src="https://purepng.com/public/uploads/large/purepng.com-fedex-logologobrand-logoiconslogos-251519939539h7rji.png"
            alt=""
          />{" "}
          $10.00
        </button>
      </div>
    </section>
  );
};

export default DeliveryMethod;
