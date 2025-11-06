import { Fragment } from "react";

import { Navigate } from "react-router-dom";
import authHeader from "../api/auth-token-header";

const AuthMiddleware = (props) => {
  if (!authHeader()) {
    return <Navigate to={{ pathname: "/", state: { from: props.location } }} />;
  }

  return <Fragment>{props.children}</Fragment>;
};

export default AuthMiddleware;
