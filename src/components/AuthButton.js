import React from "react";
import { withRouter } from "react-router-dom";

const AuthButton = withRouter(props => {
  const isAuth = localStorage.getItem("isAutentificated");
  const isAuthBool = JSON.parse(isAuth);
  return isAuthBool ? (
    <p>
      Hello!{" "}
      <button
        onClick={() => {
          localStorage.setItem("isAutentificated", false);
          props.history.push("/");
        }}
      >
        log out
      </button>
    </p>
  ) : (
    <p>Please log in to view private information</p>
  );
});

export default AuthButton;
