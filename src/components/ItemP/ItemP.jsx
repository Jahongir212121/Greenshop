import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
export default function ItemP() {
  return (
    <li className="post__inner-item">
      <img className="post__inner-item-img" src="/post-01.png" alt="post" />
      <div className="post__inner-item__content">
        <span className="post__inner-item-subtitle">
          September 12 I Read in 6 minutes
        </span>
        <h3 className="post__inner-item-heading">
          Cactus & Succulent Care Tips
        </h3>
        <p className="post__inner-item-text">
          Cacti are succulents are easy care plants for any home or patio.
        </p>
        <button className="post__inner-item-btn">
          <p className="post__inner-item-btn-text">Read More </p>
          <FaArrowRightLong className="post__inner-btn-img fill-[#3d3d3d]" />
        </button>
      </div>
    </li>
  );
}
