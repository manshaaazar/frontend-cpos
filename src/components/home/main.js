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
        className="xs:w-full xs:h-full   sm:w-2/4 sm:h-2/4 md:w-2/4 md:h-2/4 lg:w-2/4 lg:h-2/4 w-full h-full"
        style={{
          backgroundColor: "#EEEEEE",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            letterSpacing: "2px",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Continue with
        </p>
        <div>
          <button
            className=" w-32 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => signInWithGoogle(googleLogin)}
          >
            <img
              style={{ height: "25px", width: "25px" }}
              src={GoogleLoginLogo}
            />
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
