import React from "react";
import { signInWithGoogle } from "../services/firebase";
import { connect } from "react-redux";
import * as actions from "../../actions/login";
import GoogleLoginLogo from "./resources/google.svg";
import { useHistory } from "react-router-dom";
import Logo from "../logo/main";
const Home = ({ googleLogin, accessToken }) => {
  const history = useHistory();

  if (accessToken) {
    history.push("/shop");
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#053742",
      }}
    >
      <Logo />
      <div
        style={{
          height: "40vh",
          width: "30vw",
          backgroundColor: "#EEEEEE",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <p
          style={{
            letterSpacing: "2px",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "1.6",
          }}
        >
          Login with
        </p>
        <div>
          <button
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => signInWithGoogle(googleLogin)}
          >
            <img
              style={{ height: "25px", width: "25px" }}
              src={GoogleLoginLogo}
            />
            <span> | </span>google
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("redux-state", state);
  return { accessToken: state.login.accessToken };
};
export default connect(mapStateToProps, actions)(Home);
