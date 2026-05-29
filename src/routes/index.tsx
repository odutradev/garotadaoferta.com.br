import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import routesPaths from "@routes/routes";

const Router = () => {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        {routesPaths.map(({ path, routes }) =>
          routes.map(([itemPath, element]) => {
            return (
              <Route
                key={path + itemPath}
                path={path + itemPath}
                element={element}
              />
          )})
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;