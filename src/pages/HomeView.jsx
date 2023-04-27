import React, { useEffect, useState } from "react";
import axios from "axios";
import BugReportIcon from "@mui/icons-material/BugReport";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import robot from "../Assets/Images/robot2.png";
import { Button } from "@mui/material";
import logo from "../Assets/Images/logo.png";

import { Link } from "react-router-dom";

function HomeView({ isLogged }) {
  const [apiResponse, setAPiResponse] = useState();

  const [debug, setDebug] = useState(false);

  // const [otherApiResponse, setOtherAPiResponse] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        setAPiResponse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    isLogged && apiResponse && setDebug(false);
  }, [isLogged, apiResponse]);

  useEffect(() => {
    if (!apiResponse) {
      setDebug(true);
    }
    if (!isLogged) {
      setDebug(true);
    }
  }, [isLogged, apiResponse]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "20px",
        background: "linear-gradient(270deg, #0c5e5a 20%, #fff 100%)",

        opacity: "1",
      }}
    >
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "end",
          // background: "red",
          height: "93.3vh",

          boxSizing: "border-box",
          padding: "20px",
        }}
      >
        <img
          src={robot}
          alt="robot"
          style={{
            marginRight: "40%",
            marginLeft: "auto",
            transform: "scalex(-1)",
            scale: "1.5",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
          opacity: "1",
          maxHeight: "800px",
          boxSizing: "border-box",
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
        <h1>GPTalking 1.0</h1>
        <p>Bem-vindo à página principal da aplicação!</p>

        <div style={{ maxHeight: "400px", overflow: "auto" }}>
          {" "}
          <p>
            Esta aplicação foi desenvolvida em React e tem como objetivo
            permitir que o usuário faça solicitações por voz e receba respostas
            faladas em resposta a essas solicitações.
          </p>
          <p>
            Para isso, a aplicação tem um componente React que usa a biblioteca
            &nbsp;
            <Link to={"https://webspeechrecognition.com/"} target="_blank">
              Web Speech Recognition
            </Link>{" "}
            para ouvir o áudio do usuário e converter a fala em texto. Em
            seguida, a aplicação usa um serviço de processamento de linguagem
            natural para interpretar a solicitação do usuário e determinar a
            melhor resposta.
          </p>
          <p>
            Uma vez que a aplicação tenha determinado a resposta, ela usa uma
            biblioteca de síntese de fala, como a biblioteca{" "}
            <Link
              to={
                "https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API"
              }
              target="_blank"
            >
              SpeechSynthesis
            </Link>{" "}
            do JavaScript, para gerar uma resposta falada para o usuário.
          </p>
          <p>
            Essa aplicação lida com desafios de reconhecimento de voz,
            processamento de linguagem natural e síntese de fala. Além disso,
            garante a fácilidade e seguranca para os usuários.
          </p>
        </div>

        {!isLogged && (
          <Link
            key={"Resgistrar"}
            color="inherit"
            to={"/register"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              variant="contained"
              style={{ maxWidth: "max-content", background: "#0c5e5a" }}
            >
              Solicitar acesso!
            </Button>
          </Link>
        )}
      </div>
      {debug && (
        <span
          style={{
            position: "absolute",
            bottom: 15,
            right: isLogged ? 50 : 50,
          }}
        >
          {/* DEBUGS: */}
          <br />
          {apiResponse ? (
            <>
              <CloudIcon />
              <span
                style={{
                  color: "black",
                  margin: 10,
                }}
              >
                {apiResponse}
              </span>
            </>
          ) : (
            <>
              <CloudOffIcon color="error" />
              <span
                style={{
                  color: "red",
                  margin: 10,
                  fontWeight: "bold",
                }}
              >
                Api desconectada!
              </span>
            </>
          )}
          <br />
          {isLogged ? (
            <>
              <LockOpenIcon />

              <span
                style={{
                  color: "black",
                  margin: 10,
                }}
              >
                Usuário logado!
              </span>
            </>
          ) : (
            <>
              <LockIcon color="error" />
              <span
                style={{
                  color: "red",
                  margin: 10,
                  fontWeight: "bold",
                }}
              >
                Usuário deslogado!
              </span>
            </>
          )}
          <br />
        </span>
      )}
      {(!apiResponse || !isLogged) && (
        <span
          style={{
            position: "absolute",
            bottom: 10,
            right: isLogged ? 20 : 20,
          }}
          onClick={() => setDebug(!debug)}
        >
          {debug ? <CloseIcon /> : <BugReportIcon color="error" />}
        </span>
      )}
    </div>
  );
}

export default HomeView;
