import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ActivatedRoute = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  const location = useLocation();
  return !isAuth ? (
    <Navigate to="/" state={{ from: location }} />
  ) : isAuth && !user?.activated ? (
    <Outlet />
  ) : (
    <Navigate to="/rooms" state={{ from: location }} />
  );
};

export default ActivatedRoute;
