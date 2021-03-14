import { LOGIN, LOGOUT } from "./auth-action";

const authreducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));

      return {
        ...state,
        isAuthnticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isAuthnticated: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authreducer;
