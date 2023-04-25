import React from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Button, Paper } from "@mui/material";
import util_logo from "../Assets/Images/logo_fundo_claro.png";
import Typography from "@mui/material/Typography";

function RegisterView({ setIsLogged }) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    setIsLogged(true);
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        // height: "100%",
        // width: "100%",
        position: "absolute",
        // paddingLeft: "50%",
        transform: "translate(30%, 35%)",
        minWidth: "500px",
      }}
    >
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "400px",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={util_logo}
            alt="Logo Util"
            className="utilLogo"
            loading="lazy"
            width={"200px"}
          />
        </div>
        <h1>Registro</h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField id="username" label="Nome" variant="outlined" />
          <br />
          <TextField id="email" label="E-mail" variant="outlined" />
          <br />

          <TextField id="password" label="Senha" variant="outlined" />
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "400px",
              justifyContent: "start",
              cursor: "pointer",
            }}
            onClick={() => navigate("/login")}
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
              style={{ maxWidth: "max-content" }}
            >
              Salvar
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default RegisterView;
