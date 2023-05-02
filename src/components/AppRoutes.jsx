import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";

import { Navigate } from "react-router-dom";
function AppRoutes() {
  const [isLogged, setIsLogged] = useState();

  useEffect(() => {
    setIsLogged(false);
  }, []);

  const Protected = ({ isLogged, children }) => {
    if (!isLogged) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
