import React from "react";
import Label from "../Label/Label";
import Input from "../Input/Input";
import "./Address.css";

export default function Address() {
  return (
    <div className="check__inner-form-box">
      <h2 className="check__inner-form-box-title">Billing Address</h2>
      <form className="check__inner-form">
        <div className="check__inner-form-boxx">
          <div className="check__inner-form-box-inner">
            <Label name="First Name" htmlFor="name" />
            <Input id="name" type="text" />
          </div>
          <div className="check__inner-form-box-inner">
            <Label name="Last Name" htmlFor="surname" />
            <Input id="surname" type="text" />
          </div>
        </div>
        <div className="check__inner-form-boxx">
          <div className="check__inner-form-box-inner">
            <Label name="Country / Region" htmlFor="country" />
            <select id="country" className="check__inner-form-input">
              <option className="check__inner-form-option" disabled>
                Select a country / region
              </option>
            </select>
          </div>
          <div className="check__inner-form-box-inner">
            <Label name="Town / City" htmlFor="city" />
            <Input id="city" type="text" />
          </div>
        </div>
        <div className="check__inner-form-boxx">
          <div className="check__inner-form-box-inner">
            <Label name="Street Address" htmlFor="street" />
            <Input
              id="street"
              type="text"
              placeholder="House number and street name"
            />
          </div>
          <div className="check__inner-form-box-inner mt-[25px]">
            <Input
              id="street-2"
              type="text"
              placeholder="Apartment, suite, unit, etc. (optional)"
            />
          </div>
        </div>
        <div className="check__inner-form-boxx">
          <div className="check__inner-form-box-inner">
            <Label name="State" htmlFor="state" />
            <select id="state" className="check__inner-form-input">
              <option className="check__inner-form-option" disabled>
                Select a state
              </option>
            </select>
          </div>
          <div className="check__inner-form-box-inner">
            <Label name="Zip" htmlFor="zip" />
            <Input id="zip" type="text" />
          </div>
        </div>
        <div className="check__inner-form-boxx">
          <div className="check__inner-form-box-inner">
            <Label name="Email address" htmlFor="email" />
            <Input id="email" type="text" />
          </div>
          <div className="check__inner-form-box-inner">
            <Label name="Phone Number" htmlFor="number" />
            <Input id="number" type="text" />
          </div>
        </div>
      </form>
      <div className="radio-wrapper">
        <input type="radio" id="ship-different" name="shipping" />
        <label htmlFor="ship-different">Ship to a different address?</label>
      </div>
      <div className="order-notes">
        <label htmlFor="order-notes">Order notes (optional)</label>
        <textarea
          id="order-notes"
          className="order-notes-textarea"
        ></textarea>
      </div>
    </div>
  );
}
