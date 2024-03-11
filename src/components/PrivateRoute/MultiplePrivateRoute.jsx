import React from "react";
import { Navigate } from "react-router-dom";
import store from "../Redux/Store";

export function PrivateRouteForQA({ children }) {
  const QAAuth = store.getState().QoAuth;
  if (QAAuth) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
export function PrivateRouteForPC({ children }) {
  const PCAuth = store.getState().ProgramCordinatorAuth;
  if (PCAuth) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
export function PrivateRouteForAdmin({ children }) {
  const adminAuth = store.getState().adminAuth;
  if (adminAuth) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}