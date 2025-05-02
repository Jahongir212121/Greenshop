import React from "react";
import "./Sale.css";
// import Image from "../../assets/Gul.svg";
const Sale = () => {
  return (
    <div className="sale">
      <img className="sale-img" src="super-sale.jpg" />
      <div className="sale-text">
        <p className="sale-subtitle">UP TO 75% OFF</p>
      </div>
    </div>
  );
};

export default Sale;
