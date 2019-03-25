import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  const isAuth = JSON.parse(localStorage.getItem("isAutentificated"));
  return isAuth ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { referrer: props.location.pathname }
      }}
    />
  );
};

export default PrivateRoute;
