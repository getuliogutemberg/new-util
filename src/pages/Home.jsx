import React, { useState } from "react";
import "./Home.css";

import avatar from "../Assets/Images/avatar.jpg";
import reactlogo from "../Assets/Images/reactlogo.png";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
const nodemailer = require("nodemailer");

function Home() {
  const dotenv = require("dotenv");
  dotenv.config(); // carrega as variáveis do arquivo .env
  const [view, setView] = useState("/");
  const [email, setEmail] = useState({});

  const handleChange = (event) => {
    console.log(event.target.name);
    setEmail({ ...email, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    // Configuração do transporte SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "getulio.dev@gmail.com",
        // pass: NODE_ENV.PASSMAIL,
        pass: "developer$21",
      },
    });

    // Configuração do e-mail
    const email = {
      from: message.Email,
      to: "getulio.dev@gmail.com",
      subject: "Mensagem de " + message.Nome,
      text: message.Mensagem,
    };

    // Envio do e-mail
    transporter.sendMail(email, function (error, info) {
      if (error) {
        console.error(error);
      } else {
        console.log("E-mail enviado: " + info.response);
      }
    });
    // JSON.stringify(message);
    // MailApp.sendEmail(
    //   "getulio.dev@gmail.com",
    //   "Novo Contato pelo Portifolio",
    //   message.message
    // );
  };

  return (
    <div
      className="landing-page"
      style={{
        display: "flex",
        // width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        background: "black",
        color: "white",
        overflow: "hidden",
        // overflowY: "hidden",
      }}
    >
      <header
        style={{
          display: "flex",
          position: "fixed",

          right: "0px",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          width: "30vw",
          // paddingTop: "50vh",
          // boxSizing: "border-box",

          zIndex: "2",
        }}
      >
        <h1>{}</h1>
        <nav
          style={{
            fontSize: 60,
            fontWeight: "bold",
          }}
        >
          <ul
            style={{
              gap: "0px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {/* {view === "/projects" && (
              <li>
                <p
                  onClick={() => setView("/")}
                  style={{
                    backgroundColor: "black",
                    cursor: "pointer",
                    height: "100vh",
                    paddingTop: "91vh",
                  }}
                >
                  Eu
                </p>
              </li>
            )} */}
            {(view === "/contact" || view === "/projects") && (
              <li>
                <p
                  onClick={() => setView("/")}
                  style={{
                    position: "fixed",
                    backgroundColor: "black",
                    cursor: "pointer",
                    height: "100vh",
                    width: "15vw",
                    left: "0px",
                    paddingTop: "5vh",
                    writingMode: "vertical-lr",
                    rotate: "180deg",
                    wordWrap: "break-word",
                    textShadow: "#000 5px 0 10px",
                  }}
                >
                  Eu
                </p>
              </li>
            )}
            {/* {view === "/" && (
              <li>
                <p
                  onClick={() => setView("/about")}
                  style={{
                    backgroundColor: "none",
                    cursor: "pointer",
                    height: "100vh",
                    paddingTop: "91vh",
                  }}
                >
                  Eu
                </p>
              </li>
            )} */}

            {view !== "/projects" && (
              <li>
                <p
                  onClick={() => setView("/projects")}
                  style={{
                    backgroundColor: "#2b292e",
                    // backgroundColor: "#49a8ec",
                    cursor: "pointer",
                    height: "100vh",
                    left: view === "/contact" ? "15vw" : "70vw",
                    position: "fixed",
                    width: "15vw",
                    paddingTop: view === "/contact" ? "5vh" : "70vh",
                    writingMode: "vertical-lr",
                    rotate: view === "/contact" ? "180deg" : "0deg",
                    wordWrap: "break-word",
                    justifyContent: "center",
                    textShadow: "#000 5px 0 10px",

                    // textOrientation: "upright",
                    // display: "flex",
                  }}
                >
                  Projetos
                </p>
              </li>
            )}
            {view !== "/contact" && (
              <li>
                <p
                  onClick={() => setView("/contact")}
                  style={{
                    background: "#49a8ec",

                    cursor: "pointer",
                    height: "100vh",
                    width: "15vw",
                    paddingTop: "70vh",
                    writingMode: "vertical-lr",
                    wordWrap: "break-word",
                    justifyContent: "end",
                    textShadow: "#000 5px 0 10px",
                    // display: "flex",
                  }}
                >
                  Contato
                </p>
              </li>
            )}
          </ul>
        </nav>
      </header>

      {view === "/" && (
        <section
          onClick={() => setView("/about")}
          style={{
            display: "flex",
            cursor: "pointer",
            position: "fixed",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            background: "black",
            width: "70vw",
            left: "0px",
            height: "100vh",
            boxSizing: "border-box",
            // border: "1px solid white",
            // padding: "100px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              background: "none",
              width: "70vw",
              // height: "100vh",
              boxSizing: "border-box",
              padding: "100px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "none",
                width: "70vw",
                height: "100vh",
                boxSizing: "border-box",

                zIndex: "1",
                scale: "1.3",
              }}
            >
              <h1
                style={{
                  paddingLeft: "10vw",
                  fontSize: 110,
                  wordWrap: "break-word",
                  // textShadow: "10px 10px 2px black",
                  textShadow: "#000 5px 0 10px",
                  // textShadow: "5px 5px #558ABB",
                }}
              >
                Olá,&nbsp;
                <p>
                  sou
                  <span
                    style={{
                      color: "#49a8ec",
                      cursor: "help",
                      zIndex: "3",
                    }}
                  >
                    {" "}
                    Getúlio Gutemberg
                  </span>
                </p>
              </h1>
              {/* <a
                href="#about"
                className="btn-primary"
                style={{ color: "#49a8ec", textDecoration: "none" }}
                >
                Saiba mais
              </a> */}
              <h2 style={{ textShadow: "#000 5px 0 10px" }}>
                Desenvolvedor Web
              </h2>
            </div>

            <img
              src={avatar}
              alt="avatar"
              style={{
                // display: "flex",
                position: "fixed",
                bottom: "-5vh",

                // justifyContent: "start",

                // transform: "scalex(-1)",
                zIndex: "0",
                scale: "1.1",
                left: "30vw",
              }}
            />
            <img
              src={reactlogo}
              alt="reactlogo"
              style={{
                display: "flex",
                position: "fixed",
                top: "73vh",
                left: "calc(30vw + 440px)",
                // justifyContent: "start",
                height: "20px",
                // transform: "scalex(-1)",
                zIndex: "0",
                width: "60px",
              }}
            />
          </div>
        </section>
      )}
      {view === "/about" && (
        <section
          onClick={() => setView("/")}
          id="about"
          style={{
            display: "flex",
            cursor: "pointer",
            position: "fixed",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            background: "black",
            width: "72vw",
            left: "0px",
            height: "100vh",
            boxSizing: "border-box",
            padding: "100px",
          }}
        >
          <h1 style={{ fontSize: 70, fontWeight: "bold" }}>Sobre mim</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              background: "none",
              width: "50vw",
              height: "100vh",
              boxSizing: "border-box",
              padding: "100px",
              fontSize: 30,
            }}
          >
            <p>
              Eu sou um desenvolvedor front-end com anos de experiência em HTML,
              CSS e JavaScript.
            </p>
            <p>
              Um cara curioso e apaixonado por tecnologia desde criança. Quando
              eu era pequeno, sempre desmontava e montava coisas para entender
              como elas funcionavam. Embora eu tenha me formado em engenharia
              civil e trabalhado como gestor de obras, minha verdadeira paixão
              sempre foram os códigos e a interação com máquinas.
            </p>
            <p>
              Atualmente, trabalho no desenvolvimento de softwares, com foco
              especial em interfaces, buscando por soluções disruptivas e
              inovadoras no campo da tecnologia. Em resumo, sou uma pessoa
              criativa, curiosa e dedicada, sempre em busca de novos desafios e
              experiências.
            </p>
          </div>
        </section>
      )}

      {view === "/projects" && (
        <section
          id="services"
          style={{
            display: "flex",

            position: "fixed",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#2b292e",
            // background: "#49a8ec",
            width: "73vw",
            height: "100vh",
            boxSizing: "border-box",
            padding: "100px",
          }}
        >
          {" "}
          <div>
            <h1
              style={{
                fontSize: 70,
                fontWeight: "bold",
                textShadow: "#000 5px 0 10px",
              }}
            >
              Projetos
            </h1>
            <div
              style={{
                display: "flex",
                //   flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <ul>
                <li>Desenvolvimento de sites responsivos</li>
                <li>Criação de interfaces para aplicativos web</li>
                <li>Otimização de desempenho de páginas web</li>
              </ul>
            </div>
          </div>
        </section>
      )}
      {view === "/contact" && (
        <section
          id="contact"
          style={{
            display: "flex",
            position: "fixed",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            // background: "#2b292e",
            background: "#49a8ec",

            width: "100vw",
            height: "100vh",
            boxSizing: "border-box",
            padding: "100px",
          }}
        >
          <h1
            style={{
              display: "flex",
              position: "fixed",
              paddingLeft: "30vw",
              fontSize: 70,
              fontWeight: "bold",
              textShadow: "#000 5px 0 10px",
            }}
          >
            Contato
          </h1>
          {/* <Contato /> */}
          <div
            style={{
              display: "flex",

              justifyContent: "center",
              alignItems: "center",

              height: "100vh",
            }}
          >
            <form
              style={{
                display: "flex",
                position: "fixed",
                right: "5vw",
                top: "30vh",
                background: "white",
                color: "#000",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                height: "50vh",
                width: "60vw",
                minWidth: "500px",
                boxShadow: "#000 5px 0 10px",
              }}
            >
              <TextField
                onChange={handleChange}
                label="Nome"
                name="Nome"
                variant="outlined"
                margin="normal"
                required
                style={{ width: "100%" }}
              />
              <TextField
                onChange={handleChange}
                label="E-mail"
                name="Email"
                variant="outlined"
                margin="normal"
                required
                style={{ width: "100%" }}
              />
              <TextField
                onChange={handleChange}
                label="Mensagem"
                name="Mensagem"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                required
                style={{ width: "100%" }}
              />
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  Enviar
                </Button>
              </Box>
            </form>
          </div>
        </section>
      )}
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          bottom: "0px",
          left: "0",
          background: "black",
          width: "100vw",
        }}
      >
        <p>&copy; 2023 Getúlio Gutemberg</p>
      </footer>
    </div>
  );
}

export default Home;
