import React from "react";
import { withRouter } from "react-router-dom";

const AuthButton = withRouter(props => {
  const isAuth = JSON.parse(localStorage.getItem("isAutentificated"));
  return isAuth ? (
    <p className="text-right">
      Hello!{" "}
      <button
        className="btn btn-dark"
        onClick={() => {
          localStorage.setItem("isAutentificated", false);
          props.history.push("/");
        }}
      >
        log out
      </button>
    </p>
  ) : (
    <p className="text-right">Please log in to view private information</p>
  );
});

export default AuthButton;
