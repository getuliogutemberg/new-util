import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button, Paper } from "@mui/material";
import logo from "../Assets/Images/logo.png";
import robot from "../Assets/Images/robot2.png";
import axios from "axios";
import Typography from "@mui/material/Typography";

function LoginView({ setIsLogged }) {
  const navigate = useNavigate();

  const [acess, setAcess] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAcess({ ...acess, [name]: value });
  };

  const [error, setError] = useState(null);
  const [sucess, setSucess] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLogged(true);
    navigate("/client");
    // axios
    //   .get("http://localhost:3001/users")
    //   .then((response) => {
    //     var filtrado = response.data.filter(function (obj) {
    //       return obj.email == acess.email;
    //     });
    //     return filtrado;
    //   })
    //   .then((response) => {
    //     console.log(acess);
    //     console.log(response);
    //     var acess = response.filter(function (obj) {
    //       return obj.password == acess.password;
    //     });
    //     console.log(acess);
    //     if (response.lenght > 0 && acess !== {}) {
    //       if (
    //         response.email === acess.email &&
    //         response.password === acess.password
    //       ) {
    //         setSucess(`Usuário ${response.username} logado!`);
    //         setTimeout(() => {
    //           setOpenSnackbar(true);
    //           setSucess(null);
    //           navigate(
    //             response.role === "basic"
    //               ? "/client"
    //               : response.role === "admin"
    //               ? "/client"
    //               : response.role === "master"
    //               ? "/master"
    //               : "/login"
    //           );
    //         }, 3000);
    //       } else {
    //         setError("Erro na senha!");
    //         setTimeout(() => {
    //           setError(null);
    //         }, 5000);
    //       }
    //     } else {
    //       setError("Acesso negado!");
    //       setTimeout(() => {
    //         setError(null);
    //       }, 5000);
    //     }
    //   })
    //   .catch((error) => {
    //     if (error && error.response.status) {
    //       setError("Falha ao logar!");
    //       setOpenSnackbar(true);
    //       setTimeout(() => {
    //         setOpenSnackbar(false);
    //         setError(null);
    //       }, 5000);
    //     }
    //   });
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
            <TextField
              id="email"
              name="email"
              label="E-mail"
              variant="outlined"
              onChange={handleChange}
            />
            <br />

            <TextField
              id="password"
              name="password"
              label="Senha"
              variant="outlined"
              onChange={handleChange}
            />
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
          {!!error && <span style={{ color: "red" }}>{`${error}`}</span>}

          {!!sucess && <span style={{ color: "green" }}>{`${sucess}`}</span>}
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
