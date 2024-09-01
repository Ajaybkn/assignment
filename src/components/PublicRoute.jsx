// components/PublicRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const PublicRoute = ({ element, restricted }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated && restricted ? <Navigate to="/home" /> : element;
};

export default PublicRoute;
