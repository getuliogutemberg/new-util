import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import { Typography } from "antd";

import React from "react";
// import { Children } from "react";

const FieldCard = ({
  flexGrow,
  title = "Titulo",
  subtitle = "Subtitulo",
  children,
  hidden = false,
}) => {
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "space-between",
    //     // background: "blue",
    //     width: "30vw",
    //     minWidth: "400px",
    //     height: "29.5vh",
    //     minHeight: "200px",
    //     boxSizing: "border-box",
    //     flexGrow: { flexGrow },
    //     margin: "5px",
    //   }}
    // >
    <Paper
      sx={{
        display: !hidden ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "space-between",
        
        minWidth: "250px",

        minHeight: "50px",
        boxSizing: "border-box",
        flexGrow: flexGrow,
        margin: "5px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "start" }}>
       
          <Typography.Title  level={5} style={{ margin: 10 }}>{title} </Typography.Title>
          <Typography.Title  level={5} style={{ margin: 10 , fontWeight:'100',fontStyle :'italic'}}>{subtitle}</Typography.Title>
            
          
        
      </div>
      {/* <img
          src="/logo512.png"
          alt="Imagem"
          style={{
            height: "calc(100% - 56px)",
            background: "red",
            padding: "5px",
            width: "100%",
          }}
        /> */}
      {children ? (
        children
      ) : (
        
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100% - 50px)",
            // background: "red",
            padding: "5px",
            // width: "29vw",
            // minWidth: "100%",
            boxSizing: "border-box",
          }}
        >
          <CircularProgress color="success" />
        </div>
      )}
    </Paper>
    // {/* </div> */}
  );
};

export default FieldCard;
