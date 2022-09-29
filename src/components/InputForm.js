import React from "react";

const InputForm = ({ type, placeholder, className, onChange, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={`p-0.5 pl-2 border-primary focus:outline-none focus:border-secondary border-2 rounded-md ${className}`}
    ></input>
  );
};

export default InputForm;
