import React from "react";

const FieldRow = ({ children, flexGrow, hidden = false ,height='100%' }) => {
  return (
    <div
      style={{
        display: !hidden ? "flex" : "none",
        flexDirection: "row",

        // flexWrap: "wrap",
        // justifyContent: "space-center",
        flexGrow: flexGrow,
        height,
        // boxSizing: "border-box",
        // alignItems: "stretch",
        width: `100%`,
      }}
    >
      {children}
    </div>
  );
};

export default FieldRow;
