import React from "react";

export default function Input({ placeholder, id, type }) {
  return (
    <input
      placeholder={placeholder}
      id={id}
      type={type}
      className="check__inner-form-input"
    />
  );
}
