import React from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button, Paper } from "@mui/material";
import logo from "../Assets/Images/logo.png";
import robot from "../Assets/Images/robot2.png";

import Typography from "@mui/material/Typography";

function LoginView({ setIsLogged }) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    setIsLogged(true);
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          height: "100vh",
          width: "50%",
          minWidth: "500px",

          display: "flex",
        }}
      >
        <Paper
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            flexDirection: "column",
            boxSizing: "border-box",
            width: "400px",
            height: "content",
            padding: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={logo}
              alt="Logo"
              className="Logo"
              loading="lazy"
              width={"300px"}
            />
          </div>
          <h1>Login</h1>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextField id="username" label="E-mail" variant="outlined" />
            <br />

            <TextField id="password" label="Senha" variant="outlined" />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // width: "400px",
                // maxWidth: "50vw",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",

                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/register")}
              >
                <Typography>Registrar</Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // maxWidth: "400px",
                  justifyContent: "end",
                }}
              >
                <Button
                  type="submit"
                  // color="#28A471"
                  variant="contained"
                  style={{ maxWidth: "max-content", background: "#0c5e5a" }}
                >
                  Entrar
                </Button>
              </div>
            </div>
          </form>
        </Paper>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",

          height: "100vh",
          width: "50%",
          minWidth: "500px",

          display: "flex",
          zIndex: "-1",
        }}
      >
        <img
          src={robot}
          alt="robot"
          style={{
            scale: "2",
          }}
        />
      </div>
    </div>
  );
}

export default LoginView;
