import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes.jsx";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
