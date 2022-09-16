import React from "react";

const ButtonForm = ({ text, onClick }) => {
  return (
    <input
      type={"submit"}
      value={text}
      onClick={onClick}
      className="bg-primary hover:bg-secondary px-6 py-1 border-4 border-transparent focus:outline-none focus:border-4 focus:border-secondary hover:border-4 hover:border-primary rounded-xl text-xl text-white	font-bold"
    />
  );
};

export default ButtonForm;
