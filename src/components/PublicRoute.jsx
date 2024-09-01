import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ element, restricted }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return isAuthenticated && restricted ? <Navigate to="/home" /> : element;
};

export default PublicRoute;
