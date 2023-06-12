import React from "react";

const FieldColumn = ({
  children,
  flexGrow = 1,
  hidden = false,
  showFieldRecomendations,
}) => {
  return (
    <div
      style={{
        display: !hidden ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        // width: `calc(100vw - ${isLogged ? "65px" : "0px"})`,
        background: "#e7ebf0",
        height: `calc(100vh - ${showFieldRecomendations ? "115px" : "65px"})`,
        overflow: "auto",
        flexWrapX: "wrap",

        // gap: "10px",
        boxSizing: "border-box",
        // margin: "10px",
        flexGrow: flexGrow,
      }}
    >
      {children}
    </div>
  );
};

export default FieldColumn;
