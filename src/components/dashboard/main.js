import React, { lazy } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/login";
import LOGO from "./resources/logo.svg";
const BarcodeGen = lazy(() => import("../barcode/main"));
const Navigate = lazy(() => import("./navigate"));
const Logo = lazy(() => import("../logo/main"));
const Menu = ({ accessToken }) => {
  const history = useHistory();
  if (!accessToken) {
    history.push("/");
  }
  return (
    <div className="menu-container bg-ocean w-72 h-screen flex flex-col justify-start items-center">
      <Logo />
      <div className="menu-items flex flex-col w-full ">
        <Navigate
          navTo="/stock"
          heading="Stock"
          detail={["Add", "Delete", "Update", "Products"]}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { accessToken: state.login.accessToken };
};
export default connect(mapStateToProps, actions)(Menu);
