import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./About.css";
export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__box">
            <img src="/plant.png" alt="plant" className="about__box-img" />
            <div className="about__box-content">
              <h2 className="about__box-title">SUMMER CACTUS & SUCCULENTS</h2>
              <h2 className="about__box-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis
              </h2>
              <button className="about__box-btn">
                <p className="about__box-btn-text">Fing More</p>
                <FaArrowRightLong className="about__box-btn-img fill-[#fff]" />
              </button>
            </div>
          </div>
          <div className="about__box">
            <img src="/plant.png" alt="plant" className="about__box-img" />
            <div className="about__box-content">
              <h2 className="about__box-title">SUMMER CACTUS & SUCCULENTS</h2>
              <h2 className="about__box-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis
              </h2>
              <button className="about__box-btn">
                <p className="about__box-btn-text">Fing More</p>
                <FaArrowRightLong className="about__box-btn-img fill-[#fff]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
