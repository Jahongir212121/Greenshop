import React, { useState } from "react";
import Gul from "../../assets/Gul.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Massage from "../../assets/Message.png";
import "./SinglePlant.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext/CartContext";

const SinglePlant = () => {
  const [rating, setRating] = useState(0);
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  const images = [Gul, Gul, Gul, Gul];

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const item = {
      id: "barberton-daisy",
      name: "Barberton Daisy",
      price: 119.0,
      size: selectedSize,
      quantity: quantity,
    };
    addToCart(item);
    navigate("/cart");
  };

  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increase") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="container">
      <div className="single-plant-inner">
        <div className="image-gallery">
          <div className="main-image">
            <img src={Gul} alt="Main Plant" />
          </div>
          <div className="thumbnails">
            {images.map((img, index) => (
              <img key={index} src={img} className="thumbnail" alt={`Thumbnail ${index}`} />
            ))}
          </div>
        </div>

        <div className="plant-details">
          <h1 className="plant-details-title">Barberton Daisy</h1>
          <div className="lo">
            <p className="plant-details-price">$119.00</p>
            <div className="star-rating">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={index < rating ? "star filled" : "star"}
                  onClick={() => handleRatingClick(index)}
                >
                  ★
                </span>
              ))}
              <span className="review-count">19 Customer Review</span>
            </div>
          </div>

          <strong className="desc-title">Short Description:</strong>
          <p className="description">
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
          </p>

          <h1 className="desc-title">Size:</h1>
          <div className="size-selector">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? "active" : ""}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="actions">
            <div className="quantity-selector">
              <button className="quantity-button" onClick={() => handleQuantityChange("decrease")}>
                -
              </button>
              <span>{quantity}</span>
              <button className="quantity-button" onClick={() => handleQuantityChange("increase")}>
                +
              </button>
            </div>
            <button className="buy-now">BUY NOW</button>
            <button className="add-to-cart" onClick={handleAddToCart}>
              ADD TO CART
            </button>
            <button className="add-to-cart">♡</button>
          </div>

          <div className="additional-info">
            <p className="info-text">SKU: 1995751877966</p>
            <p className="info-text">Categories: Potter Plants</p>
            <p className="info-text">Tags: Home, Garden, Plants</p>
            <div className="social-share">
              <span className="social-title">Share this product:</span>
              <img src={Facebook} className="social-icon" alt="Facebook" />
              <img src={Twitter} className="social-icon" alt="Twitter" />
              <img src={Linkedin} className="social-icon" alt="LinkedIn" />
              <img src={Massage} className="social-icon" alt="Message" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlant;
