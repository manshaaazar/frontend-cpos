import React from "react";
import { Link } from "react-router-dom";
const Navigate = ({ navTo, detail, heading }) => {
  return (
    <div
      className="nav-container"
      style={{
        height: "30px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
        textAlign: "left",
        borderTop: "1px solid #1e4b55",
      }}
    >
      <div>
        <Link to={navTo} style={{ textDecoration: "none", color: "white" }}>
          {heading}
        </Link>
        <div>
          {" "}
          {detail.map((word) => (
            <span style={{ margin: "2px", color: "#02161a" }}>{`${word}`}</span>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Navigate;
