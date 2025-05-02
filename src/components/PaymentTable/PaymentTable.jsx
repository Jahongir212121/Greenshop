import React from "react";
import TableItem from "../TableItem/TableItem";
import "./PaymentTable.css";
export default function PaymentTable() {
  return (
    <div className="payment-table">
      <div className="payment-table__inner-box">
        <h2 className="payment-table__inner-box-heading1">Products</h2>
        <h2 className="payment-table__inner-box-heading2">Price</h2>
        <h2 className="payment-table__inner-box-heading3">Quantity</h2>
        <h2 className="payment-table__inner-box-heading4">Total</h2>
      </div>
      <div className="payment-table__inner-box-table">
        <TableItem />
        <TableItem />
        <TableItem />
      </div>
    </div>
  );
}
