import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const LoginRoute = ({ children, ...other }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  return !isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/rooms" state={{ from: location }} replace />
  );
};

export default LoginRoute;
