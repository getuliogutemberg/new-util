import React ,{useState} from "react";
import FieldCard from "../components/FieldCard";
import FieldRow from "../components/FieldRow";
import FieldColumn from "../components/FieldColumn";
import FieldView from "../components/FieldView";
import FieldRecomendations from "../components/FieldRecomendations";




import ReactEcharts from "echarts-for-react";

// import { useState } from "react";



function ClientView() {
  
  const layout = {
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
  };

  


  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  }; 



  
  
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
      <FieldView flexGrow={layout.FieldView} hidden={layout.FieldView.hidden}>
        <FieldColumn
          flexGrow={layout.FieldColumn.flexGrow}
          hidden={layout.FieldColumn.hidden}
          showFieldRecomendations={!layout.FieldRecomendations.hidden}
        >
          <FieldRow
            flexGrow={1}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false} title="Eficiencia instantaneo" subtitle="">
            <div style={{display: 'flex', justifyItems: 'center', alignItems: 'center',background:'red',flexGrow:1}}>
              {/* Grafico eficiencia historico */}
              <ReactEcharts option={option} style={{display:'flex',flexGrow:1}} />
              </div>

            </FieldCard>

            <FieldCard flexGrow={2} hidden={false} title="Eficiencia" subtitle="">
             <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',background:'',flexGrow:1}}>
              {/* Grafico eficiencia historico */}
              <ReactEcharts option={option} style={{display:'flex',flexGrow:1}} />
              </div>

            </FieldCard>

            <FieldCard flexGrow={1} hidden={false} title="Recomendacões" subtitle="">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',background:'',flexGrow:1}}>
              {/* Grafico eficiencia historico */}
              <ReactEcharts option={option} style={{display:'flex',flexGrow:1}} />
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
