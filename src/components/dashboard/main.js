import React from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/login";
import BarcodeGen from "../barcode/main";
import Navigate from "./navigate";
import LOGO from "./resources/logo.svg";
const Home = ({ accessToken }) => {
  const history = useHistory();
  if (!accessToken) {
    history.push("/");
  }
  return (
    <div
      className="dashboard-container"
      style={{
        height: "100vh",
        width: "auto",
        display: "flex",
        backgroundColor: "#053742",
      }}
    >
      <BarcodeGen />
      <div
        className="menu-container"
        style={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="header-sec "
          style={{
            width: "100%",
            height: "40px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            color: "white",
            fontFamily: "Jomhuria",
            fontSize: "45px",
          }}
        >
          <img
            style={{
              height: "30px",
              width: "50px",
              marginLeft: "15px",
              marginBottom: "10px",
            }}
            src={LOGO}
            alt="LOGO"
          />
          CPOS
        </div>
        <div className="menu-sec" style={{ width: "100%", height: "90%" }}>
          <Navigate
            navTo="/stock"
            heading="Stock"
            detail={["Add", "Delete", "Update", "Products"]}
          />
          <Navigate
            navTo="/analytics"
            heading="Analytics"
            detail={["Sell", "Stock", "Overview"]}
          />
        </div>
      </div>
      <div
        className="main-container"
        style={{ backgroundColor: "blue", width: "85%" }}
      ></div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { accessToken: state.login.accessToken };
};
export default connect(mapStateToProps, actions)(Home);
