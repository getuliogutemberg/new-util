import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "../pages/HomeView.jsx";
import SensorDataView from "../pages/SensorDataView.jsx";
import AlertsView from "../pages/AlertsView.jsx";
import ClientView from "../pages/ClientView.jsx";
import AdminView from "../pages/AdminView.jsx";
import MasterView from "../pages/MasterView.jsx";
import LoginView from "../pages/LoginView.jsx";
import RegisterView from "../pages/RegisterView.jsx";
import AnaliticsView from "../pages/AnaliticsView.jsx";
import HomologationView from "../pages/HomologationView.jsx";
import SetupView from "../pages/SetupView.jsx";
import TestsView from "../pages/TestsView.jsx";
import TemplateView from "../pages/TemplateView.tsx";
import { Navigate } from "react-router-dom";
function AppRoutes() {
  //   const jwt = require("jsonwebtoken");
  //   const expressJwt = require("express-jwt");

  //   const secret = "seu-segredo-aqui";

  //   // Gera um token de acesso com base no ID do usuário
  //   function generateToken(user) {
  //     const payload = {
  //       id: user.id,
  //       email: user.email,
  //       role: user.role,
  //     };
  //     const options = { expiresIn: "1h" };
  //     return jwt.sign(payload, secret, options);
  //   }

  //   // Middleware que verifica se o token de acesso é válido
  //   function validateToken(req, res, next) {
  //     expressJwt({ secret })(req, res, (err) => {
  //       if (err) {
  //         return res.status(401).json({ message: "Token inválido" });
  //       }
  //       next();
  //     });
  //   }

  //   // Rota de login que gera um token de acesso e envia de volta para o cliente
  //   app.post("/login", async (req, res) => {
  //     const { email, password } = req.body;
  //     const user = await User.findOne({ email });
  //     if (!user || !user.comparePassword(password)) {
  //       return res.status(401).json({ message: "Email ou senha inválidos" });
  //     }
  //     const token = generateToken(user);
  //     res.json({ token });
  //   });

  //   // Rota protegida que só pode ser acessada com um token de acesso válido
  //   app.get("/minha-rota-protegida", validateToken, (req, res) => {
  //     res.json({
  //       message: "Esta rota só pode ser acessada com um token de acesso válido",
  //     });
  //   });
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
            <HomeView />
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
          <TemplateView isLogged={isLogged} setIsLogged={setIsLogged}>
            <ClientView />
          </TemplateView>
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
              <AlertsView />
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
