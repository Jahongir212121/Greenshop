import React from "react";
import { Link } from "react-router-dom";
import Address from "../Address/Address";
import Order from "../Order/Order";

export default function Check() {
  return (
    <section className="check">
      <div className="container">
        <div className="check__inner">
          <h1 className="view__inner-route mt-[36px] mb-[36px]x">
            <Link className="view__inner-route-span" to={"/"}>
              Home
            </Link>{" "}
            / <Link to={"/shop"}>Shop</Link> /{" "}
            <Link to={"/shop/checkout"}>Checkout</Link>
          </h1>
          <div className="flexx">
            <Address />
            <Order />
          </div>
        </div>
      </div>
    </section>
  );
}
