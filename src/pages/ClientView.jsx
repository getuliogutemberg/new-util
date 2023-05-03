import React, { useEffect } from "react";
import FieldCard from "../components/FieldCard";
import FieldRow from "../components/FieldRow";
import FieldColumn from "../components/FieldColumn";
import FieldView from "../components/FieldView";
import FieldRecomendations from "../components/FieldRecomendations";
import Dygraph from "dygraphs";
import myData from "../Assets/Graphs/sample-data";

import { useState } from "react";

const MyGraph = () => {
  useEffect(() => {
    const messages = myData;
    let data = "";

    messages.data.forEach((response) => {
      data += response[1] + "," + response[3] + "\n";
    });

    new Dygraph("graphContainer", data, {
      title: "Pressure Transient(s)",
      // titleHeight: 32,
      ylabel: "Pressure (meters)",
      xlabel: "Time",
      gridLineWidth: "0.1",
      width: "600px",
      // height: 250,
      connectSeparatedPoints: true,
      axes: { x: { axisLabelFontSize: 9 }, y: { axisLabelFontSize: 9 } },
      labels: ["Date", "Tampines Ave10 (Stn 40)"],
    });
  }, []);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContenct: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div id="graphContainer" />
    </div>
  );
};

function ClientView({}) {
  const [layout, setLayout] = useState({
    FieldRecomendations: {
      hidden: false,
      flexGrow: 1,
    },
    FieldView: {
      hidden: false,
      flexGrow: 1,
    },
    FieldColumn: {
      hidden: false,
      flexGrow: 1,
    },
    FieldRow: {
      hidden: false,
      flexGrow: 1,
    },
  });

  return (
    <div
      style={{
        height: `calc(100vh - 65px)`,
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FieldRecomendations
        flexGrow={layout.FieldRecomendations.flexGrow}
        hidden={layout.FieldRecomendations.hidden}
      />{" "}
      <FieldView flexGrow={1} hidden={layout.FieldView.hidden}>
        <FieldColumn
          flexGrow={layout.FieldColumn.flexGrow}
          hidden={layout.FieldColumn.hidden}
          showFieldRecomendations={!layout.FieldRecomendations.hidden}
        >
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false}>
              {/* <MyGraph /> */}
            </FieldCard>
            <FieldCard flexGrow={4} hidden={false}>
              {/* <MyGraph /> */}
            </FieldCard>
            <FieldCard flexGrow={1} hidden={false}>
              {/* <MyGraph /> */}
            </FieldCard>
          </FieldRow>
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
          </FieldRow>
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
          </FieldRow>
        </FieldColumn>
      </FieldView>
    </div>
  );
}

export default ClientView;
