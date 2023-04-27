import React from "react";
import ChartCard from "../components/ChartCard";
import ChartRow from "../components/ChartRow";

function ClientView({ isLogged }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        width: `calc(100vw - ${isLogged ? "65px" : "0px"})`,
        background: "#e7ebf0",
        height: "93.3vh",
        overflow: "auto",
        flexWrapX: "wrap",
        overflow: "auto",
        // gap: "10px",
        boxSizing: "border-box",
        // margin: "10px",
      }}
    >
      <ChartRow flexGrow={1} hidden={false}>
        <ChartCard flexGrow={1} hidden={false} />
        <ChartCard flexGrow={4} hidden={false} />
        <ChartCard flexGrow={1} hidden={false} />
      </ChartRow>
      <ChartRow flexGrow={1} hidden={false}>
        <ChartCard flexGrow={1} hidden={false} />
        <ChartCard flexGrow={1} hidden={false} />
      </ChartRow>
      <ChartRow flexGrow={1} hidden={false}>
        <ChartCard flexGrow={1} hidden={false} />
        <ChartCard flexGrow={1} hidden={false} />
        <ChartCard flexGrow={1} hidden={false} />
      </ChartRow>
    </div>
  );
}

export default ClientView;

// card Graficos parametros: flexGrow, title,subtitle,img,
{
  /* <div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "violet",
    // width: "33vw",
    minWidth: "400px",
    height: "31.1vh",
    boxSizing: "border-box",
    flexGrow: 1,
    minHeight: "200px",
  }}
>
  <div>
    <h1>Resumo</h1>
    <p>Algum texto descritivo do resumo.</p>
  </div>
  <img src="/caminho/da/imagem.jpg" alt="Imagem" style={{ width: "50%" }} />
</div>; */
}
