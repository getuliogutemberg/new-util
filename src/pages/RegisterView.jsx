import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Button, Paper } from "@mui/material";
import logo from "../Assets/Images/logo.png";
import Typography from "@mui/material/Typography";
import robot from "../Assets/Images/robot2.png";

import axios from "axios";

function RegisterView({ setIsLogged }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [sucess, setSucess] = useState(null);
  // const [openSnackbar, setOpenSnackbar] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/users", user)
      .then((response) => {
        console.log(response.data);
        setSucess(`Usuário ${response.data.username} cadastrado com sucesso!`);
        setTimeout(() => {
          // setOpenSnackbar(true);
          setSucess(null);
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        if (error.response.status) {
          setError("Falha ao cadastrar o Usuário!");
          // setOpenSnackbar(true);
          setTimeout(() => {
            // setOpenSnackbar(false);
            setError(null);
          }, 5000);
        }
      });
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
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          height: "100vh",
          width: "50%",
          minWidth: "500px",

          // display: "flex",
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
              width={"200px"}
            />
          </div>
          <h1>Registro</h1>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column",gap:'10px' }}
          >
            <TextField
              id="username"
              name="username"
              label="Nome"
              variant="outlined"
              onChange={handleChange}
            />
            
            <TextField
              id="email"
              name="email"
              label="E-mail"
              variant="outlined"
              onChange={handleChange}
            />
            

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
                onClick={() => navigate(-1)}
              >
                <Typography>Voltar</Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  maxWidth: "400px",
                  justifyContent: "end",
                }}
              >
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={{ maxWidth: "max-content", background: "#0c5e5a" }}
                >
                  Salvar
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
          display: "none",
          justifyContent: "center",
          alignItems: "end",

          height: "100vh",
          width: "50%",
          minWidth: "500px",

          
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

export default RegisterView;
