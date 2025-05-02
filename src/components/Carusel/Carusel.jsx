import React from "react";
import plant from "/plant.png";
import "./Carusel.css";
export default function Carusel() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h3 className="hero__content-title">Welcome to GreenShop</h3>
            <h1 className="hero__content-heading">
              Let’s Make a Better
              <span className="hero__content-heading-span"> Planet</span>
            </h1>
            <p className="hero__content-text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <button className="hero__content-btn">SHOP NOW</button>
          </div>
          <img className="hero__inner-img" src={plant} alt="plant" />
        </div>
      </div>
    </section>
  );
}
