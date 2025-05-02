import React, { useState } from "react";
import "./TableItem.css";
export default function TableItem() {
  const [count, setCount] = useState(1);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <div className="payment__table-item">
      <div className="payment__table-item-inner">
        <div className="payment__table-item-inner-box">
          <img width={70} height={70} src="/plant.png" />
          <div className="payment__table-item-inner-box-content">
            <h2 className="payment__table-item-inner-box-content-heading">
              Barberton Daisy
            </h2>
            <h2 className="payment__table-item-inner-box-content-text">
              SKU:{" "}
              <span className="payment__table-item-inner-box-content-span">
                1995751877966
              </span>
            </h2>
          </div>
        </div>
        <h3 className="payment__table-item-inner-box-heading">$119.00</h3>
        <div className="flex flex-wrap] gap-[26px]">
          <div className="flex items-center min-w-[55px] space-x-2">
            <button
              onClick={decrement}
              className="w-[33px] h-[38px] flex items-center justify-center bg-[#46a358] text-white border border-green-600 rounded-full"
            >
              -
            </button>
            <span className="text-lg font-medium text-gray-800">{count}</span>
            <button
              onClick={increment}
              className="w-[33px] h-[38px] flex items-center justify-center bg-[#46a358] text-white border border-green-600 rounded-full"
            >
              +
            </button>
          </div>
          <h3 className="payment__table-item-inner-box-heading2">$238.00</h3>
          <img width={24} height={24} src="/Trash.svg" />
        </div>
      </div>
    </div>
  );
}
