import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import PaymentTable from "../PaymentTable/PaymentTable";
import "./Payment.css";
export default function Payment() {
  return (
    <section className="payment mt-[36px]">
      <div className="container">
        <div className="payment__inner">
          <h1 className="view__inner-route mb-[51px]">
            <Link className="view__inner-route-span" to={"/"}>
              Home
            </Link>{" "}
            / <Link to={"/shop"}>Shop</Link> /{" "}
            <Link to={"/shop/card"}>Shopping Cart</Link>
          </h1>
          <div className="payment__inner-main">
            <PaymentTable />
            <Cart />
          </div>
        </div>
      </div>
    </section>
  );
}
