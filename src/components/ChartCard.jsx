import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";

const ChartCard = ({
  flexGrow,
  title = "Titulo",
  subtitle = "Subtitulo",
  chart,
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        minWidth: "400px",

        minHeight: "200px",
        boxSizing: "border-box",
        flexGrow: flexGrow,
        margin: "5px",
      }}
    >
      <div>
        <p>
          <span style={{ fontWeight: "bold", padding: "20px" }}>{title} </span>
          <span>{subtitle}</span>
        </p>
      </div>
      {chart ? (
        { chart }
      ) : (
        // <img
        //   src="/logo512.png"
        //   alt="Imagem"
        //   style={{
        //     height: "calc(100% - 56px)",
        //     background: "red",
        //     padding: "5px",
        //     width: "100%",
        //   }}
        // />
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

export default ChartCard;
