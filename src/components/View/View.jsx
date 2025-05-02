import React, { useState } from "react";
import { CiMail, CiSearch } from "react-icons/ci";
import "./View.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegHeart,
  FaStar,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";

export default function View() {
  const [count, setCount] = useState(1);
  const [activeSize, setActiveSize] = useState("S");


  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <div className="view">
      <div className="container">
        <div className="view__inner">
          <h1 className="view__inner-route">
            <Link className="view__inner-route-span" to={"/"}>
              Home
            </Link>{" "}
            / <Link to={"/shop"}>Shop</Link>
          </h1>
          <div className="view__main">
            <div className="view__inner-box-img">
              <div className="view__inner-col">
                <div className="view__inner-box-mini-img w-[100px] bg-[#fbfbfb]">
                  <img src="/plant.png" />
                </div>
                <div className="view__inner-box-mini-img w-[100px] bg-[#fbfbfb]">
                  <img src="/plant.png" />
                </div>
                <div className="view__inner-box-mini-img w-[100px] bg-[#fbfbfb]">
                  <img src="/plant.png" />
                </div>
                <div className="view__inner-box-mini-img w-[100px] bg-[#fbfbfb]">
                  <img src="/plant.png" />
                </div>
              </div>
              <div className="view__inner-box-big">
                <div className="view__inner-box-big-img">
                  <button className="search-icon">
                    <CiSearch />
                  </button>
                  <img src="/plant.png" alt="plant" />
                </div>
              </div>
            </div>

            <div className="view__inner-box-box">
              <div className="view__inner-box-content">
                <h1 className="view__inner-box-content-title">
                  Barberton Daisy
                </h1>
                <div className="view__inner-box-content-box">
                  <h2 className="view__inner-box-content-box-price">$119.00</h2>
                  <div className="view__inner-box-content-boxx">
                    <div className="view__inner-box-content-box-rating">
                      <FaStar className="fill-[#FFAC0C] w-[15px] h-[15px]" />
                      <FaStar className="fill-[#FFAC0C] w-[15px] h-[15px]" />
                      <FaStar className="fill-[#FFAC0C] w-[15px] h-[15px]" />
                      <FaStar className="fill-[#FFAC0C] w-[15px] h-[15px]" />
                      <FaStar className="fill-[#C4C4C4] w-[15px] h-[15px]" />
                    </div>
                    <p className="view__inner-box-content-box-text">
                      19 Customer Review
                    </p>
                  </div>
                </div>
                <div className="view__inner-box-desc">
                  <h2 className="view__inner-box-desc-title">
                    Short Description:
                  </h2>
                  <p className="view__inner-box-desc-text">
                    The ceramic cylinder planters come with a wooden stand to
                    help elevate your plants off the ground. The ceramic
                    cylinder planters come with a wooden stand to help elevate
                    your plants off the ground.
                  </p>
                </div>
                <div className="view__inner-box-desc">
                  <h2 className="view__inner-box-desc-title">Size:</h2>
                </div>
                <div className="view__inner-box-desc-size-box">
                  <label
                    className={
                      activeSize === "S"
                        ? "view__inner-box-desc-sizee"
                        : "view__inner-box-desc-size"
                    }
                  >
                    <input
                      type="radio"
                      name="size"
                      value="S"
                      checked={activeSize === "S"}
                      onChange={(e) => setActiveSize(e.target.value)}
                      style={{ display: "none" }}
                    />
                    S
                  </label>
                  <label
                    className={
                      activeSize === "M"
                        ? "view__inner-box-desc-sizee"
                        : "view__inner-box-desc-size"
                    }
                  >
                    <input
                      type="radio"
                      name="size"
                      value="M"
                      checked={activeSize === "M"}
                      onChange={(e) => setActiveSize(e.target.value)}
                      style={{ display: "none" }}
                    />
                    M
                  </label>
                  <label
                    className={
                      activeSize === "L"
                        ? "view__inner-box-desc-sizee"
                        : "view__inner-box-desc-size"
                    }
                  >
                    <input
                      type="radio"
                      name="size"
                      value="L"
                      checked={activeSize === "L"}
                      onChange={(e) => setActiveSize(e.target.value)}
                      style={{ display: "none" }}
                    />
                    L
                  </label>
                  <label
                    className={
                      activeSize === "XL"
                        ? "view__inner-box-desc-sizee"
                        : "view__inner-box-desc-size"
                    }
                  >
                    <input
                      type="radio"
                      name="size"
                      value="XL"
                      checked={activeSize === "XL"}
                      onChange={(e) => setActiveSize(e.target.value)}
                      style={{ display: "none" }}
                    />
                    XL
                  </label>
                </div>
                <div className="flex flex-wrap gap-[26px] mt-[23px] sm:grid sm:grid-cols-2 sm:gap-2 sm:mt-4">
                  {/* Increment/Decrement */}
                  <div className="flex items-center min-w-[55px] space-x-2">
                    <button
                      onClick={decrement}
                      className="w-[33px] h-[38px] flex items-center justify-center bg-[#46a358] text-white border border-green-600 rounded-full"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium text-gray-800">
                      {count}
                    </span>
                    <button
                      onClick={increment}
                      className="w-[33px] h-[38px] flex items-center justify-center bg-[#46a358] text-white border border-green-600 rounded-full"
                    >
                      +
                    </button>
                  </div>

                  {/* Buttons */}
                  <button className="view__inner-btn-box-btn sm:w-full">
                    Buy NOW
                  </button>
                  <Link
                    to={"/shop/card"}
                    className="view__inner-btn-box-btnn text-center sm:w-full"
                  >
                    Add to cart
                  </Link>
                  <button className="view__inner-btn-box-btnnn rounded sm:w-full flex items-center justify-center">
                    <FaRegHeart className="fill-[#46A358]" />
                  </button>
                </div>
              </div>
              <div className="view__inner-box-location">
                <div className="view__inner-box-location-content">
                  <div className="view__inner-box-location-content-box">
                    <h3 className="view__inner-box-location-content-heading">
                      SKU:
                    </h3>
                    <p className="view__inner-box-location-content-text">
                      1995751877966
                    </p>
                  </div>
                  <div className="view__inner-box-location-content-box">
                    <h3 className="view__inner-box-location-content-heading">
                      Categories:
                    </h3>
                    <p className="view__inner-box-location-content-text">
                      Potter Plants
                    </p>
                  </div>
                  <div className="view__inner-box-location-content-box">
                    <h3 className="view__inner-box-location-content-heading">
                      Tags:
                    </h3>
                    <p className="view__inner-box-location-content-text">
                      Home, Garden, Plants
                    </p>
                  </div>
                </div>
                <div className="view__inner-box-location-link">
                  <h2 className="view__inner-box-location-link-heading">
                    Share this products:
                  </h2>
                  <div className="view__inner-box-location-link-box">
                    <Link to={"#"}>
                      <FaFacebookF />
                    </Link>
                    <Link to={"#"}>
                      <FaTwitter />
                    </Link>
                    <Link to={"#"}>
                      <FaLinkedinIn />
                    </Link>
                    <Link to={"#"}>
                      <MdOutlineMail />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
