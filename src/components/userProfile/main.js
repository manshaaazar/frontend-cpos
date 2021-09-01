import React, { useState } from "react";
import { HiCog } from "react-icons/hi";
import { logOut } from "../services/firebase";
import { connect } from "react-redux";
import * as actions from "../../actions/login";
const UserProfile = ({ googleLogOut }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="select-none">
      <HiCog
        className="h-10 w-10 bg-ocean text-white hover:shadow-lg cursor-pointer"
        onClick={() => (toggle ? setToggle(false) : setToggle(true))}
      />
      {toggle ? (
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
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("state", state);
};
export default connect(mapStateToProps, actions)(UserProfile);
