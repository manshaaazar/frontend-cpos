import React, { lazy, useState } from "react";
import { HiX } from "react-icons/hi";
const CircleMenu = ({ setCircleMenuToggle, setAddBrandToggle }) => {
  const handleBrandBtn = () => {
    setAddBrandToggle((prevState) => !prevState);
  };
  return (
    <div
      onMouseLeave={() => setCircleMenuToggle(false)}
      className="h-48 w-48 bg-ocean text-white rounded-md flex flex-col justify-around items-center leading-10"
    >
      <div className="close-circle-menu-btn text-white flex justify-end items-center pr-4 w-full cursor-pointer  ">
        <HiX
          onClick={() => setCircleMenuToggle(false)}
          className="rounded-full  hover:bg-ocean-light p-1 text-xl"
        />
      </div>
      <div className="operation-list w-full">
        <div
          onClick={() => handleBrandBtn()}
          className="hover:bg-ocean-light w-full text-center"
        >
          Brand
        </div>
        <div className="hover:bg-ocean-light  text-center">Product</div>
        <div className="hover:bg-ocean-light  text-center">Variant</div>
      </div>
    </div>
  );
};

export default CircleMenu;
