import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivatePortal from './pages/private';
import PublicPortal from './pages/public';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            // <AuthGuardRedirect redirectTo="/user/dashboard">
                <PublicPortal />
            // </AuthGuardRedirect>
          }
        />
        <Route
          path="user/*"
          element={
            // <RequireAuth redirectTo="/auth/signin">
              <PrivatePortal />
            // </RequireAuth>
          }
        />
      </Routes>
      <ToastContainer 
        hideProgressBar
      />
    </>
  );
}

export default App;

// function RequireAuth({ children, redirectTo }) {
//   const isAuthenticated = localStorage.getItem("token");
//   if (!isAuthenticated) {
//     const currentPath = window.location.pathname + window.location.search;
//     const redirectPath = `${redirectTo}?redirectTo=${encodeURIComponent(currentPath)}`;
//     return <Navigate to={redirectPath} />;
//   }
//   return isAuthenticated ? children : null;
// }
// function AuthGuardRedirect({ children, redirectTo }) {
//   const isAuthenticated = localStorage.getItem("token");
//   return isAuthenticated ? <Navigate to={redirectTo} /> : children;
// }
