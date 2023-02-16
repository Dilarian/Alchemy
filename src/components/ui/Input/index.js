import React from "react";

import "./style.scss";

export default function Input({ type, placeholder, onChange, name, value }) {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
}
