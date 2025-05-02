import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.svg";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <Link className="header__logo-link" to={"/"}>
              <img className="header__logo-img" src={logo} alt="" />
            </Link>
            <ul className="header__list">
              <li className="header__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "header__item-linkk" : "header__item-link"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "header__item-linkk" : "header__item-link"
                  }
                  to={"/shop"}
                >
                  Shop
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "header__item-linkk" : "header__item-link"
                  }
                  to={"/shop/card"}
                >
                  Cart
                </NavLink>
              </li>
            </ul>
            <div className="header__end">
              <button onClick={toggleSearch}>
                <CiSearch className="header__end-icon1" />
              </button>

              <div className="header__end-box">
                <Link to={"/shop/card"} className="header__end-link-basket">
                  <span className="header__end-span">6</span>
                  <span className="header__end-icon2">🛒</span>
                </Link>
              </div>
              <div className="header__end-boxx">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="header__end-link-login"
                >
                  <RiLogoutBoxLine className="header__end-img fill-[#fff]" />
                  <p className="header__end-text">Login</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative overflow-y-auto max-h-[95vh]">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
              onClick={() => setIsModalOpen(false)}
            >
              <AiOutlineClose />
            </button>
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                <span
                  onClick={() => setIsLogin(true)}
                  className={`cursor-pointer ${isLogin ? "text-green-600" : "text-gray-500"
                    }`}
                >
                  Login
                </span>{" "}
                |{" "}
                <span
                  onClick={() => setIsLogin(false)}
                  className={`cursor-pointer ${!isLogin ? "text-green-600" : "text-gray-500"
                    }`}
                >
                  Register
                </span>
              </h2>

              <p className="text-gray-600 text-sm mt-3">
                {isLogin
                  ? "Enter your username and password to login."
                  : "Create your account by filling out the form."}
              </p>

              {/* Username input for Register */}
              {!isLogin && (
                <div className="mt-3 relative">
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Username"
                  />
                </div>
              )}
              {/* Email input */}
              <div className="mt-4">
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Email"
                />
              </div>
              {/* Password input */}
              <div className="mt-3 relative">
                <input
                  type="password"
                  className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Password"
                />
              </div>

              {/* Confirm Password input for Register */}
              {!isLogin && (
                <div className="mt-3 relative">
                  <input
                    type="password"
                    className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Confirm Password"
                  />
                </div>
              )}
              {/* Forgot Password link for Login */}
              {isLogin && (
                <div className="mt-2 text-right">
                  <a href="#" className="text-green-500 text-sm">
                    Forgot Password?
                  </a>
                </div>
              )}

              <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                {isLogin ? "Login" : "Register"}
              </button>

              <p className="mt-4 text-gray-600">Or login with</p>

              <div className="mt-3 space-y-2">
                <button className="w-full flex items-center justify-center space-x-3 border py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                  <img src="/google.svg" alt="google" />
                  <span>Login with Google</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-3 border py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                  <img src="/facebook-1.svg" alt="google" />
                  <span>Login with Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
