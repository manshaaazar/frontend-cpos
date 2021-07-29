import React from "react";
import LOGO from "./resources/logo.svg";
const Logo = (shadow) => {
  return (
    <div
      className={"header-sec"}
      style={{
        width: "100%",
        height: "40px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        color: "white",
        fontFamily: "Jomhuria",
        fontSize: "45px",
        backgroundColor: "#053742",
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
  );
};
export default Logo;
