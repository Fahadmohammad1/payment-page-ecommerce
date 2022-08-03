import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <section className="cart-container">
      <h5>Your Cart</h5>
      <div className="summer-tshirt-div">
        <div className="summer-t-shirt">
          <img
            style={{ width: "50px", borderRadius: "60%" }}
            src="https://priyoshopbackup.blob.core.windows.net/priyoshop/content/Images/Thumbs/0235539_half-sleeve-cotton-t-shirt-for-men-mb48_415.jpeg"
            alt=""
          />
          <span className="tshirt-model">
            T-shirt
            <br />
            Summer Vibes
            <br />
            <br />
            <span className="code">#261311</span>
          </span>
        </div>
        <span>$89.99</span>
      </div>
      <div className="fit-tshirt-div">
        <div className="summer-t-shirt">
          <img
            style={{ width: "50px", borderRadius: "60%" }}
            src="https://priyoshopbackup.blob.core.windows.net/priyoshop/content/Images/Thumbs/0235539_half-sleeve-cotton-t-shirt-for-men-mb48_415.jpeg"
            alt=""
          />
          <span className="tshirt-model">
            Basic Slim
            <br />
            Fit T-Shirt <br /> <br /> <span className="code">#212315</span>
          </span>
        </div>
        <span>$69.99</span>
      </div>
      <div className="total-cost-div">
        <span className="total-cost">Total Cost</span>
        <span>$159.98</span>
      </div>
    </section>
  );
};

export default Cart;
