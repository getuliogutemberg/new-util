import React from "react";

const FieldColumn = ({ children, flexGrow = 1, hidden = false }) => {
  return (
    <div
      style={{
        display: !hidden ? "flex" : "none",
        flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "stretch",
        // width: `calc(100vw - ${isLogged ? "65px" : "0px"})`,
        background: "#e7ebf0",
        // height: "93.3vh",
        overflow: "auto",
        flexWrapx: "wrap",
        // overflow: "auto",
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
