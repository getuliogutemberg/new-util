import React from "react";

const FieldRow = ({ children, flexGrow = 1, hidden = false }) => {
  return (
    <div
      style={{
        display: !hidden ? "flex" : "none",
        flexWrap: "wrap",
        justifyContent: "space-center",
        flexGrow: flexGrow,
        boxSizing: "border-box",
        alignItems: "stretch",
      }}
    >
      {children}
    </div>
  );
};

export default FieldRow;
