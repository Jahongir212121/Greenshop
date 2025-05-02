import React from "react";
import "./Label.css";
export default function Label({ name, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="check__inner-form-label">
      {name} <span className="check__inner-form-span">*</span>
    </label>
  );
}
