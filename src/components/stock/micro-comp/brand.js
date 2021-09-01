import React, { useState, lazy, useRef, useEffect } from "react";
import { HiOutlineArrowsExpand, HiTrash } from "react-icons/hi";
import { removeBrand } from "../../../actions/stock";
const ProductBar = lazy(() => import("./product"));
const ConfirmationBox = lazy(() => import("../../lib/confirmationBox/main"));
const BrandBar = ({ brand, removeBrandHandler }) => {
  const [confirmationBox, setConfirmationBox] = useState(false);
  const btnCancelHandler = () => {
    setConfirmationBox(false);
  };
  const btnProceedHandler = () => {
    removeBrandHandler(brand.brandName);
  };
  return (
    <div className="h-8 flex-shrink-0  ">
      <div className="flex flex-row justify-between items-center m-1 bg-gray-200 rounded-sm  ">
        <p className=" p-1 font-mono select-none w-full rounded-sm h-full hover:bg-ocean-light hover:text-white">
          {brand.brandName}
        </p>
        <div className="w-20  flex justify-center items-center  rounded-sm  cursor-pointer ">
          <HiTrash
            onClick={() => setConfirmationBox(true)}
            className="h-5 w-5 text-gray-700 hover:text-red-500 mr-1"
          />
          <HiOutlineArrowsExpand className="h-5 w-5 text-gray-700 hover:text-black" />
        </div>
      </div>
      {confirmationBox ? (
        <ConfirmationBox
          btnproceedText="Remove"
          btnCancelText="Cancel"
          message="Under this Brand all products will also be removed"
          btnProceedHandler={btnProceedHandler}
          btnCancelHandler={btnCancelHandler}
        />
      ) : null}
    </div>
  );
};
export default BrandBar;
