import React from "react";
import Logo from "../components/logo/resources/logo.svg";
const Spinner = () => {
  return (
    <div className="w-full h-12 flex justify-center items-center ">
      <img
        className="animate-bounce h-7 w-7  ease-in-out duration-100"
        viewBox="0 0 24 24"
        src={Logo}
      />
      <h1 className="text-gray-700 font-mono text-sm">Loading</h1>
    </div>
  );
};

export default Spinner;
