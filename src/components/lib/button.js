import React from "react";
const Button = ({ text, color, bg }) => {
  return (
    <button
      className={
        "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" +
        `bg-${bg}-500 hover:bg-${bg}-400 text-${color}`
      }
    >
      {text}
    </button>
  );
};
export default Button;
