import React from "react";

const Newsletter = () => {
  return (
    <div className="max-w-md mx-auto py-8 px-6 sm:px-12">
      <h3 className="font-semibold text-lg mb-4 text-center sm:text-left">
        Would you like to join newsletters?
      </h3>

      <div className="flex flex-col sm:flex-row items-center sm:items-stretch mb-4">
        <input
          type="email"
          placeholder="Enter your email address..."
          className="border border-gray-300 rounded p-2 text-sm w-full sm:w-2/3 mb-4 sm:mb-0 sm:mr-4"
        />
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 w-full sm:w-auto">
          Join
        </button>
      </div>

      <p className="text-sm text-gray-600 text-center sm:text-left">
        We usually post offers and challenges in the newsletter. We&apos;re your
        online houseplant destination. We offer a wide range of houseplants and
        accessories shipped directly from our (green)house to yours!
      </p>
    </div>
  );
};

export default Newsletter;
