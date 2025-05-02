import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const HelpAndGuide = () => {
  return (
    <div className="flex flex-wrap p-8 bg-gray-200">
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
        <h4 className="font-bold mb-2">My Account</h4>
        <ul className="text-sm">
          <li>My Account</li>
          <li>Our stores</li>
          <li>Contact us</li>
          <li>Career</li>
          <li>Specials</li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
        <h4 className="font-bold mb-2">Help & Guide</h4>
        <ul className="text-sm">
          <li>Help Center</li>
          <li>How to Buy</li>
          <li>Shipping & Delivery</li>
          <li>Product Policy</li>
          <li>How to Return</li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
        <h4 className="font-bold mb-2">Categories</h4>
        <ul className="text-sm">
          <li>House Plants</li>
          <li>Potter Plants</li>
          <li>Seeds</li>
          <li>Small Plants</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <div className="w-[200px] mb-4">
          <h4 className="font-bold mb-2">Social Media</h4>
          <div className="flex space-x-2">
            <div className="p-[7px] border border-[#46a358] rounded-md">
              <FaFacebookF className="w-[16px] h-[16px] fill-[#46a358]" />
            </div>
            <div
              className="p-[7px] border border-[#46a358] rounded-md
            "
            >
              <FaInstagram className="w-[16px] h-[16px] fill-[#46a358]" />
            </div>
            <div
              className="p-[7px] border border-[#46a358] rounded-md
            "
            >
              <FaTwitter className="w-[16px] h-[16px] fill-[#46a358]" />
            </div>
            <div
              className="p-[7px] border border-[#46a358] rounded-md
            "
            >
              <FaLinkedinIn className="w-[16px] h-[16px] fill-[#46a358]" />
            </div>
            <div
              className="p-[7px] border border-[#46a358] rounded-md
            "
            >
              <FaYoutube className="w-[16px] h-[16px] fill-[#46a358]" />
            </div>
          </div>
        </div>
        <div className="mb-4 flex justify-center items-center mt-4 sm:mt-0">
          <div>
            <h4 className="font-bold mb-2">We accept</h4>
            <div className="flex flex-wrap gap-[15px]">
              <img src="/paypal.png" alt="Payment Methods" className="h-6" />
              <img
                src="/mastercard.png"
                alt="Payment Methods"
                className="h-6"
              />
              <img src="/VISA.png" alt="Payment Methods" className="h-6" />
              <img src="/america.png" alt="Payment Methods" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndGuide;
