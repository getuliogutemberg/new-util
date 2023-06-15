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
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: `100%`,
        // background: "red",
        maxHeight: '100vh',
        height: `calc(100vh - ${showFieldRecomendations ? "115px" : "65px"})`,
        overflowX: "auto",
        flexWrap: "wrap",

        // gap: "10px",
        // boxSizing: "border-box",
        // margin: "10px",
        // flexGrow: flexGrow,
      }}
    >
      {children}
    </div>
  );
};

export default FieldColumn;
