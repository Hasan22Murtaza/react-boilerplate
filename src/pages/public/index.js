import React from "react";
import { Route, Routes } from "react-router-dom";
import PreLoginLayout from "../../components/Layouts/PreLoginLayout";
import Login from "./Auth/Login";
import Request from "./Requests/Request";

const PublicPortal = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<></>}>
            <Request />
          </React.Suspense>
        }
      />
        <Route path="/auth" element={<>{<PreLoginLayout />}</>}>
          <Route
            path="login"
            element={
              <React.Suspense fallback={<></>}>
                <Login />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default PublicPortal;
