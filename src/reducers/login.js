const defaultLoginState = {
  accessToken: JSON.parse(window.localStorage.getItem("accessToken")) ?? null,
  error: null,
};
export default (state = defaultLoginState, action) => {
  switch (action.type) {
    case "LOGIN":
      const { accessToken } = action.payload;
      //  console.log("accessToken:",accessToken);
      window.localStorage.setItem("accessToken", JSON.stringify(accessToken));
      return {
        ...state,
        accessToken,
        error: null,
      };
    case "Error":
      return {
        ...state,
        accessToken: null,
        error: action.payload,
      };
    case "LOGOUT":
      window.localStorage.clear();
      return {
        ...state,
        accessToken: null,
        error: null,
      };
    default:
      return state;
  }
};
