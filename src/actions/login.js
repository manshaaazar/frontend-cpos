import axios from "axios";

export const googleLogin = (profile) => {
  return async (dispatch) => {
    // send verified user profile to backend
    // recieve and save accessToken and user profile to local storage
    const { providerData } = profile;
    console.log("providerData", providerData);
    const { displayName, email, photoUrl, uid } = providerData[0];
    const { emailVerified } = profile;

    const authRes = await axios({
      method: "POST",
      url: `/auth/google`,
      data: {
        user: {
          displayName,
          email,
          photoUrl,
          uid,
          emailVerified,
        },
      },
    });
    console.log("auth_Server_Response:", authRes.data);
    if (authRes) {
      await dispatch({
        type: "LOGIN",
        payload: authRes.data,
      });
    } else {
      await dispatch({
        type: "Error",
        payload: authRes,
      });
    }
  };
};

export const googleLogOut = () => {
  return async (dispatch) => {
    // clear local storage
    // clear auth state
    await dispatch({
      type: "LOGOUT",
      payload: null,
    });
  };
};
