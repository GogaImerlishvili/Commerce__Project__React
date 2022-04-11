import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext();
  return (
    <Routes>
      <Route
        {...rest}
        render={() => {
          return myUser ? children : <Navigate to="/"></Navigate>;
        }}
      ></Route>
    </Routes>
  );
};

export default PrivateRoute;
