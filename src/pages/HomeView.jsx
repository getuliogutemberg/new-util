import React, { useEffect, useState } from "react";
import axios from "axios";
import BugReportIcon from "@mui/icons-material/BugReport";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
// import robot from "../Assets/Images/robot2.png";
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
        background: "linear-gradient(270deg, #0C5E5A7E 50%, #fff 100%)",

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
          height: "calc(100vh - 65px)",

          boxSizing: "border-box",
          padding: "20px",
        }}
      >
        <img
          src={''}
          alt=""
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
          color: "black",
          opacity: "1",
          maxHeight: "800px",
          boxSizing: "border-box",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center",background:'',width:'100vw' }}>
          <img
            src={logo}
            alt="Logo"
            className="Logo"
            loading="lazy"
            width={"300px"}
          />
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
              style={{ maxWidth: "max-content", background: "#0c5e5a",position:'absolute',bottom:'0px' }}
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
            cursor: "pointer",
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
