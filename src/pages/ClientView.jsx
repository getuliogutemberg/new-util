import React, { useEffect } from "react";
import FieldCard from "../components/FieldCard";
import FieldRow from "../components/FieldRow";
import FieldColumn from "../components/FieldColumn";
import FieldView from "../components/FieldView";
import FieldRecomendations from "../components/FieldRecomendations";
import ReactEcharts from "echarts-for-react";

import { useState } from "react";



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
      />
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
            <FieldCard flexGrow={1} hidden={false} title="Eficiencia instantaneo" subtitle="">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',background:'',flexGrow:1}}>
              Grafico eficiencia instantaneo
              </div>

            </FieldCard>

            <FieldCard flexGrow={4} hidden={false} title="Eficiencia" subtitle="">
             <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',background:'',flexGrow:1}}>
              Grafico eficiencia historico
              </div>
            </FieldCard>

            <FieldCard flexGrow={1} hidden={false} title="Recomendacões" subtitle="">
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',background:'',flexGrow:1}}>
              Grafico recomendacoes percentual do dia
              </div>
            </FieldCard>
          </FieldRow>
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false} title="Consumo" subtitle="">
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',background:'',flexGrow:1}}>
              Grafico consumo de gas
              </div>
              </FieldCard>
            <FieldCard flexGrow={1} hidden={false} title="Producao" subtitle="" > <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',background:'',flexGrow:1}}>
              Grafico producao 
              </div>
              </FieldCard>
          </FieldRow>
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false} title="Variaveis 1" subtitle=""> 
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',background:'',flexGrow:1}}>
              Grafico variaveis 1
              </div>
              </FieldCard>
            <FieldCard flexGrow={1} hidden={false} title="Variaveis 2" subtitle="">
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',background:'',flexGrow:1}}>
              Grafico variaveis 2
              </div>
              </FieldCard>
            <FieldCard flexGrow={1} hidden={false} title="Variaveis 3" subtitle=""> 
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',background:'',flexGrow:1}}>
              Grafico variaveis 3
              </div>
              </FieldCard>
          </FieldRow>
        </FieldColumn>
      </FieldView>
    </div>
  );
}

export default ClientView;
