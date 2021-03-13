import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import authreducer from "./context/login-context/auth-reducer";

export const AuthContext = React.createContext();

const initialState = {
  isAuthnticated: false,
  user: null,
  token: null,
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       localStorage.setItem("user", JSON.stringify(action.payload.user));
//       localStorage.setItem("token", JSON.stringify(action.payload.token));

//       return {
//         ...state,
//         isAuthnticated: true,
//         user: action.payload.user,
//         token: action.payload.token,
//       };

//     case "LOGOUT":
//       localStorage.clear();
//       return {
//         ...state,
//         isAuthnticated: false,
//         user: null,
//       };

//     default:
//       return state;
//   }
// };

function App() {
  const [state, dispatch] = React.useReducer(authreducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div>
        {!state.isAuthnticated ? (
          <>
            <Header />
            <Login />
          </>
        ) : (
          <Home />
        )}
      </div>
    </AuthContext.Provider>
  );
}
export default App;
