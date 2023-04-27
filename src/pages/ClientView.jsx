import React from "react";
import FieldCard from "../components/FieldCard";
import FieldRow from "../components/FieldRow";
import FieldColumn from "../components/FieldColumn";
import FieldView from "../components/FieldView";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SimpleAccordion from "../components/tests/SimpleAccordion.tsx";

function ClientView({ isLogged }) {
  const navigate = useNavigate();

  useEffect(() => {
    !isLogged && navigate("/");
  });

  return (
    <div
      style={{
        height: "calc(100vh - 65px)",
        overflowX: "auto",
      }}
    >
      <SimpleAccordion />
      <FieldView hidden={false}>
        <FieldColumn flexGrow={1} hidden={false}>
          <FieldRow flexGrow={1} hidden={false}>
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={4} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
          </FieldRow>
          <FieldRow flexGrow={1} hidden={false}>
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
          </FieldRow>
          <FieldRow flexGrow={1} hidden={false}>
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
          </FieldRow>
        </FieldColumn>
        <FieldColumn flexGrow={1} hidden={true}>
          <FieldRow flexGrow={1} hidden={false}>
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={4} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
          </FieldRow>
          <FieldRow flexGrow={1} hidden={false}>
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
          </FieldRow>
          <FieldRow flexGrow={1} hidden={false}>
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
          </FieldRow>
        </FieldColumn>
        <FieldColumn flexGrow={1} hidden={true}>
          <FieldRow flexGrow={1} hidden={false}>
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={4} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
          </FieldRow>
          <FieldRow flexGrow={1} hidden={false}>
            <FieldCard flexGrow={1} hidden={false} />
            <FieldCard flexGrow={1} hidden={false} />
          </FieldRow>
          <FieldRow flexGrow={1} hidden={false}>
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
