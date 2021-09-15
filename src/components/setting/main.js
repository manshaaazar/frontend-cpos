import React, { useState } from "react";
import { HiOutlineCog } from "react-icons/hi";
import { logOut } from "../services/firebase";
import { connect } from "react-redux";
import * as actions from "../../actions/login";
const Setting = ({ googleLogOut, color }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="select-none">
      <HiOutlineCog
        className={`h-7 w-7 text-${color}   cursor-pointer`}
        onClick={() => setToggle((prevState) => !prevState)}
      />
      {toggle && (
        <div
          onMouseLeave={() => setToggle(false)}
          className="menu-container absolute top-12 right-4 bg-ocean rounded-md  h-40 w-40"
        >
          <div className=" h-full w-auto flex flex-col justify-center items-center text-white ">
            <p
              onClick={() => {
                logOut(googleLogOut);
              }}
              className="font-detail text-sm leading-10 font-semibold cursor-pointer hover:bg-ocean-light w-full text-center transition-all duration-200 ease-in"
            >
              Logout
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(null, actions)(Setting);
