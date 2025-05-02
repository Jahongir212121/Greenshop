import React from "react";
import "./Item.css";
import Image from "/plant.png";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
function Item({ name, price }) {
  return (
    <div className="plant-item">
      <div className="plant-image bgc">
        <img src={Image} alt="Plant" />
        <div className="hover-icons">
          <button className="icon">
            <Link to={"/shop"}>🛒</Link>
          </button>
          <button className="icon">
            <IoIosHeartEmpty />
          </button>
          <button className="icon">
            <CiSearch />
          </button>
        </div>
      </div>
      <h3 className="plant-title">{name}</h3>
      <p className="plant-subtitle">${price}</p>
    </div>
  );
}

export default Item;
