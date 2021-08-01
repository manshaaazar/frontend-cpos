import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/shop";
import { HiOutlineDotsVertical } from "react-icons/hi";
import UpdateForm from "../micro-comp/form";
const Box = ({
  Icon,
  menu,
  handleRemove,
  operation,
  details,
  heading,
  shopId,
}) => {
  const [toggle, setToggle] = useState(false);
  const [toggleUpdateForm, setToggleUpdateForm] = useState(false);

  return (
    <div className="select-none w-48 h-40  text-gray-700 flex flex-col justify-between  items-end p-2 rounded-md   hover:shadow-inner-ocean-sm transition-shadow duration-200 ease-in-out">
      {menu ? (
        <div
          className="hover:shadow-ocean-sm rounded-sm w-7 h-7 flex justify-center items-center  transition-shadow duration-150 ease-linear "
          onClick={() => (toggle ? setToggle(false) : setToggle(true))}
        >
          <HiOutlineDotsVertical className="h-4 w-4 cursor-pointer " />
        </div>
      ) : null}

      {toggleUpdateForm ? (
        <div className="absolute top-1/4 left-2/5  bg-gray-200 rounded">
          <UpdateForm
            setToggle={setToggleUpdateForm}
            action="update"
            operation={operation}
            shop={{ shopName: heading, location: details, shopId }}
          />
        </div>
      ) : null}

      {toggle ? (
        <div
          onMouseLeave={() => setToggle(false)}
          className={`shop-box-menu  absolute `}
        >
          {/* shop box menu container */}
          <div className=" h-32 w-36 bg-gray-200 rounded-md flex flex-col justify-center items-center">
            <p
              onClick={() => {
                setToggleUpdateForm(true);
              }}
              className="m-1 font-medium text-xs leading-10 tracking-wide  text-center w-full hover:bg-gray-300 cursor-pointer"
            >
              Edit
            </p>
            <p
              onClick={() => handleRemove(heading)}
              className="m-1 font-medium text-xs leading-10 tracking-wide  text-center w-full hover:bg-gray-300 cursor-pointer"
            >
              Remove
            </p>
          </div>
          {/* shop box container */}
        </div>
      ) : null}

      <div className="flex flex-col justify-center items-center w-full ">
        <Icon className="w-14 h-14 " />
        <div>
          <p className="font-heading  tracking-normal text-medium text-center">
            {heading}
          </p>
          {details ? (
            <p className="font-detail  text-sm flex flex-row justify-center item-center ">
              {details.city} {details.state} {details.country}
            </p>
          ) : null}
        </div>
      </div>
      <div className="h-1 w-full bg-ocean-light rounded-sm"></div>
    </div>
  );
};

export default connect(null, actions)(Box);
