import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  const isAuth = localStorage.getItem("isAutentificated");
  const isAuthBool = JSON.parse(isAuth);
  return isAuthBool ? (
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
