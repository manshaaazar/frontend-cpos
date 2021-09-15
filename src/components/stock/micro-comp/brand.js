import React, { useState, lazy } from "react";
import {
  HiOutlineTrash,
  HiOutlineChevronUp,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { setRemovalBrand } from "../../../actions/stock";

// component imports
const Loading = lazy(() => import("../../../skeletons/spinner"));
const Product = lazy(() => import("./product"));
// Native Component
const BrandBar = ({
  brand,
  setConfirmationBoxHandler,
  setActiveBrandHandler,
  setRemovalBrandHandler,
  getProductsPerBrandHandler,
  productsPerBrand,
  activeBrand,
  loadingProducts,
}) => {
  const [expandBrand, setExpandBrand] = useState(false);
  return (
    <div className="flex-shrink-0  flex flex-col   ">
      <div className="flex flex-row justify-between items-center m-1 bg-gray-200 rounded-sm  ">
        <p className="p-1 font-mono select-none w-full rounded-sm h-full hover:bg-ocean-light hover:text-white">
          {brand.brandName}
        </p>
        <div className="w-20  flex justify-center items-center  rounded-sm  cursor-pointer ">
          <HiOutlineTrash
            onClick={() => {
              setConfirmationBoxHandler(true);
              setRemovalBrandHandler(brand.brandName);
            }}
            className="h-4 w-4 text-gray-500 hover:text-red-500 mr-1"
          />
          <div
            onClick={() => {
              setExpandBrand((prevState) => !prevState);
            }}
            className="h-5 w-5 text-gray-500 hover:text-black"
          >
            {expandBrand ? (
              <HiOutlineChevronUp />
            ) : (
              <HiOutlineChevronDown
                onClick={() => {
                  setActiveBrandHandler(brand.brandName);
                  getProductsPerBrandHandler();
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBar;
