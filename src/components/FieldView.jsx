import React from "react";

const FieldView = ({ children, flexGrow, hidden = false }) => {
  return (
    <div
      style={{
        // display: !hidden ? "flex" : "none",
        flexDirection: "column",
        // justifyContent: "space-between",
        // alignItems: "stretch",
        width: `50vw`,
        background: "#e7ebf0",
        height: "100%",
        overflow: "auto",
        // flexWrapx: "wrap",
        // overflowY: "auto",
        // gap: "10px",
        boxSizing: "border-box",
        // margin: "10px",
        flexGrow: flexGrow
        
      }}
    >
      {children}
    </div>
  );
};

export default FieldView;
