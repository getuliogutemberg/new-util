const ChartsRow = ({ children, flexGrow = 1 }) => {
  return (
    <div
      style={{
        display: "flex",
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

export default ChartsRow;
