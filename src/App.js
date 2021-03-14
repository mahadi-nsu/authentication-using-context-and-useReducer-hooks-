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
