import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoomRoute = () => {
  const { isAuth, user } = useSelector((state) => state.auth);

  const location = useLocation();
  return !isAuth ? (
    <Navigate to="/" state={{ from: location }} />
  ) : isAuth && !user?.activated ? (
    <Navigate to="/activate" state={{ from: location }} />
  ) : (
    <Outlet />
  );
};

export default ProtectedRoomRoute;
