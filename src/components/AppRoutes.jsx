import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "../pages/HomeView.jsx";
import SensorDataView from "../pages/SensorDataView.jsx";
import RecomendationView from "../pages/RecomendationView.jsx";
import ClientView from "../pages/ClientView.jsx";
import AdminView from "../pages/AdminView.jsx";
import MasterView from "../pages/MasterView.jsx";
import LoginView from "../pages/LoginView.jsx";
import RegisterView from "../pages/RegisterView.jsx";
import AnaliticsView from "../pages/AnaliticsView.jsx";
import HomologationView from "../pages/HomologationView.jsx";
import SetupView from "../pages/SetupView.jsx";
import TestsView from "../pages/TestsView.jsx";
import TemplateView from "../pages/TemplateView.jsx";
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
      <Route
        exact
        path="/"
        element={
          <TemplateView isLogged={isLogged} setIsLogged={setIsLogged}>
            <HomeView isLogged={isLogged} />
          </TemplateView>
        }
      />

      <Route
        exact
        path="/login"
        element={<LoginView setIsLogged={setIsLogged} isLogged={isLogged} />}
      />
      <Route
        exact
        path="/register"
        element={<RegisterView setIsLogged={setIsLogged} />}
      />

      <Route
        exact
        path="/client"
        element={
          <Protected isLogged={isLogged}>
            <TemplateView isLogged={isLogged} setIsLogged={setIsLogged}>
              <ClientView />
            </TemplateView>
          </Protected>
        }
      />
      <Route
        exact
        path="/admin"
        element={
          <Protected isLogged={isLogged}>
            <TemplateView isLogged={isLogged} setIsLogged={setIsLogged}>
              <AdminView />
            </TemplateView>
          </Protected>
        }
      />
      <Route
        exact
        path="/master"
        element={
          <Protected isLogged={isLogged}>
            <TemplateView isLogged={isLogged} setIsLogged={setIsLogged}>
              <MasterView />
            </TemplateView>
          </Protected>
        }
      />

      <Route
        exact
        path="/sensor-data"
        element={
          <Protected isLogged={isLogged}>
            <TemplateView isLogged={isLogged} setIsLogged={setIsLogged}>
              <SensorDataView />
            </TemplateView>
          </Protected>
        }
      />
      <Route
        exact
        path="/alerts"
        element={
          <Protected isLogged={isLogged}>
            <TemplateView isLogged={isLogged} setIsLogged={setIsLogged}>
              <RecomendationView />
            </TemplateView>
          </Protected>
        }
      />
      <Route
        exact
        path="/analitics"
        element={
          <Protected isLogged={isLogged}>
            <TemplateView isLogged={isLogged} setIsLogged={setIsLogged}>
              <AnaliticsView />
            </TemplateView>
          </Protected>
        }
      />

      <Route
        exact
        path="/homologation"
        element={
          <Protected isLogged={isLogged}>
            <TemplateView isLogged={isLogged} setIsLogged={setIsLogged}>
              <HomologationView />
            </TemplateView>
          </Protected>
        }
      />

      <Route
        exact
        path="/setup"
        element={
          <Protected isLogged={isLogged}>
            <TemplateView isLogged={isLogged} setIsLogged={setIsLogged}>
              <SetupView />
            </TemplateView>
          </Protected>
        }
      />

      <Route
        exact
        path="/tests"
        element={
          <Protected isLogged={isLogged}>
            <TemplateView isLogged={isLogged} setIsLogged={setIsLogged}>
              <TestsView isLogged={isLogged} />
            </TemplateView>
          </Protected>
        }
      />

      {/* <Route
        path="/tests"
        element={
          isLogged === true ? (
            <TemplateView isLogged={isLogged} setIsLogged={setIsLogged}>
              <TestsView />
            </TemplateView>
          ) : (
            navigate("/")
          )
        }
      /> */}
    </Routes>
  );
}

export default AppRoutes;
