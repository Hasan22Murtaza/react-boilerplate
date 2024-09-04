import React from "react";
import { Route, Routes } from "react-router-dom";
import PostLoginLayout from "../../components/Layouts/PostLoginLayout";
const Projects = React.lazy(() => import("./Projects/projects"));

const PrivatePortal = () => {

  return (
    <React.Suspense fallback={<></>}>
      <Routes>
        <Route
          path="/"
          element={
            <PostLoginLayout />
          }
        >
          <Route
            path="/projects"
            element={
              <React.Suspense fallback={<></>}>
                <Projects />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default PrivatePortal;
