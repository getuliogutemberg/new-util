import React from "react";
import FieldCard from "../components/FieldCard";
import FieldRow from "../components/FieldRow";
import FieldColumn from "../components/FieldColumn";
import FieldView from "../components/FieldView";
// import FieldRecomendations from "../components/FieldRecomendations";
// import { useState } from "react";

function MasterView() {
  const layout ={
    FieldRecomendations: {
      hidden: true,
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
  };

  return (
    <div
      style={{
        height: `calc(100vh -  65px })`,
        overflowX: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FieldView flexGrow={1} hidden={layout.FieldView.hidden}>
        <FieldColumn
          flexGrow={1}
          hidden={layout.FieldColumn.hidden}
          showFieldRecomendations={!layout.FieldRecomendations.hidden}
        >
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false} />
          </FieldRow>
        </FieldColumn>

        <FieldColumn
          flexGrow={layout.FieldColumn.flexGrow}
          hidden={layout.FieldColumn.hidden}
          showFieldRecomendations={!layout.FieldRecomendations.hidden}
        >
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false} />
          </FieldRow>

          <FieldRow flexGrow={100} hidden={layout.FieldRow.hidden}>
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
          </FieldRow>
        </FieldColumn>
      </FieldView>
    </div>
  );
}

export default MasterView;
