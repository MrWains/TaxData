import React from "react";
import { Route, useNavigate, Routes } from "react-router-dom";

const RouteGuard = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("token") ? (flag = true) : (flag = false);

    return flag;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        hasJWT() ? (
          <Component {...props} />
        ) : (
          navigate("/login", { replace: true })
        )
      }
    />
  );
};

export default RouteGuard;
