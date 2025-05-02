import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
export default function Cart() {
  return (
    <div className="payment__inner-cart">
      <div className="payment__inner-cart-box">
        <h2 className="payment__inner-cart-box-heading">Cart Totals</h2>
      </div>
      <div className="payment__inner-cart-main">
        <h2 className="payment__inner-cart-main-title">Coupon Apply</h2>
        <div className="flex items-center justify-between">
          <input
            type="text"
            className="payment__inner-cart-main-input"
            placeholder="Enter coupon code here..."
          />
          <button className="payment__inner-cart-main-btn">Apply</button>
        </div>
        <div className="payment__inner-cart-main-total">
          <div className="payment__inner-cart-main-total-inner">
            <h3 className="payment__inner-cart-main-total-inner-heading">
              Subtotal
            </h3>
            <p className="payment__inner-cart-main-total-inner-text">
              $2,683.00
            </p>
          </div>
          <div className="payment__inner-cart-main-total-inner">
            <h3 className="payment__inner-cart-main-total-inner-heading">
              Coupon Discount
            </h3>
            <p className="payment__inner-cart-main-total-inner-heading">
              (-) 00.00
            </p>
          </div>
          <div className="payment__inner-cart-main-total-inner">
            <h3 className="payment__inner-cart-main-total-inner-heading">
              Shiping
            </h3>
            <div className="payment__inner-cart-main-total-inner-box">
              <p className="payment__inner-cart-main-total-inner-text">
                $16.00
              </p>
              <p className="payment__inner-cart-main-total-inner-text2">
                View shipping charge
              </p>
            </div>
          </div>
          <div className="payment__inner-cart-main-total-inner">
            <h3 className="payment__inner-cart-main-total-inner-heading1">
              Total
            </h3>
            <p className="payment__inner-cart-main-total-inner-text3">
              $2,699.00
            </p>
          </div>
          <Link
            className="payment__inner-cart-main-total-btnn"
            to={"/shop/checkout"}
          >
            Proceed To Checkout
          </Link>
          <button className="payment__inner-cart-main-total-btnn1">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
