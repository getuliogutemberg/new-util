import React, { useEffect } from "react";
import FieldCard from "../components/FieldCard";
import FieldRow from "../components/FieldRow";
import FieldColumn from "../components/FieldColumn";
import FieldView from "../components/FieldView";
// import FieldRecomendations from "../components/FieldRecomendations";
import {  Link } from "react-router-dom";
// import logoAsa from  '../Assets/Images/logo_asa.png'
import ReactEcharts from "echarts-for-react";
import { useState } from "react";
import { Paper, Typography } from "@mui/material";
import ChartServices from "../services/ChartServices";



function SetTwinView(props) {
  const [data, setData] = useState();
  const [twinInterval, setTwinInterval] = useState([0, 0]);

  useEffect(() => {
    
    ChartServices.getGraphsByTwin(1).then((res) => {
     
        setData(res.data.find((element) => element.speedometer_main !== null));
        setTwinInterval(
          res.data.find((element) => element.speedometer_main !== null) !==
            undefined
            ? JSON.parse(
                res.data.find((element) => element.speedometer_main !== null)
                  .speedometer_main.range
              )
            : [0, 0]
        );
      
    });

    
  }, []);


  
  const value = 0;
  const [loading, setLoading] = useState(true);
  const option = {
    height: "250px",
    width: "250px",
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max:
          parseFloat(
            twinInterval[1] < 1 ? twinInterval[1].toFixed(2) : twinInterval[1].toFixed(0)
          ) * 1.5,
        splitNumber: 3,
        animationDuration: 1000,
        axisLine: {
          lineStyle: {
            width: 10,

            color: [
              [2/3, "rgba(131, 171, 81, 1)"],
              [1, "rgba(192, 64, 64, 1)"],
            ],
          },
        },
        pointer: {
          length: "40%",
          width: value === 0 ? 0 : 5,
          itemStyle: {
            color: "black",
          },
          offsetCenter: [0, "-60%"],
        },
        axisTick: {
          length: -5,
          lineStyle: {
            color: "#000",
            width: 0.5,
          },
        },
        splitLine: {
          length: -55,

          lineStyle: {
            color: "#000",
            width: 0,
          },
          color: "#000",
        },
        title: {
          offsetCenter: [0, "10%"],
          fontSize: 20,
        },
        detail: {
          fontSize: 40,
          offsetCenter: [0, "-20%"],
          valueAnimation: true,
          formatter: function (value) {
            if (value > 99) {
              return `${value.toFixed(0)}`;
            }
            if (value < 1 && value > 0) {
              return `${value.toFixed(3)}`;
            }
            if (!value) {
              return `${"0"}`;
            }

            return `${value.toFixed(2)}`;
          },
          color: "#000",
        },
        data: [
          {
            value: value,
            name: data ? data.speedometer_main.unit.abbreviation : null,
            interval: twinInterval,
          },
        ],
      },
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 60,
        min: 0,
        max: parseFloat(
          twinInterval[1] < 1 ? twinInterval[1].toFixed(2) : twinInterval[1].toFixed(0)
        ),

        itemStyle: {
          color: "rgba(131, 171, 81, 0.7)",
        },
        progress: {
          show: true,
          width: value === 0 ? 0 : 25,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: value,
          },
        ],
      },
      {
        type: "gauge",
        startAngle: 60,
        endAngle: 0,
        min: parseFloat(
          twinInterval[1] < 1 ? twinInterval[1].toFixed(2) : twinInterval[1].toFixed(0)
        ),
        max:
          parseFloat(
            twinInterval[1] < 1 ? twinInterval[1].toFixed(2) : twinInterval[1].toFixed(0)
          ) * 1.5,
        itemStyle: {
          color: "rgba(192, 64, 64, 0.7)",
        },
        progress: {
          show: true,
          width: value === 0 ? 0 : 25,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        title: {
          offsetCenter: [0, "50%"],
          fontSize: 15,
        },
        data: [
          {
            value: value,
            name: (`Intervalo de referencia: ${twinInterval[0]} - ${twinInterval[1]}`),
          },
        ],
      },
    ],
  };

  useEffect(() => {
    if (value) {
      setLoading(false);
    } else if (value === 0) {
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    }
  }, [value]);

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
  return (
    <div
      style={{
        height: `calc(100vh - 65px)`,
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <FieldRecomendations
        flexGrow={layout.FieldRecomendations.flexGrow}
        hidden={layout.FieldRecomendations.hidden}
      />{" "} */}
      <FieldView flexGrow={1} hidden={layout.FieldView.hidden}>
        <FieldColumn
          flexGrow={layout.FieldColumn.flexGrow}
          hidden={layout.FieldColumn.hidden}
          showFieldRecomendations={layout.FieldRecomendations.hidden}
        >
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false} title="Painel de Gemeos" subtitle="" >
              {/* <MyGraph /> */}
              
              
              <FieldRow >
              <Link
          
          color="black"
          to={"/monitoring"}
          style={{ margin: "10px", textDecoration: "none", color: "white",background: "" ,display:'flex',justifyContent:'start',maxHeight:"250px",maxWidth:'250px', cursor: "pointer",}}
        > <Paper >
             
             <div
                style={{
                  height: "270px",
    width: "270px", 
    padding:'10px'

                }}
              >
                <Typography variant="h5">Gastec</Typography>
                <ReactEcharts showLoading={loading} option={option} />
                
              </div>
              </Paper></Link>

              <Link
          
          color="black"
          to={"/monitoring"}
          style={{ margin: "10px", textDecoration: "none", color: "white",background: "" ,display:'flex',justifyContent:'start',maxHeight:"250px",maxWidth:'250px', cursor: "pointer",}}
        > <Paper >
             
             <div
                style={{
                  height: "270px",
    width: "270px", 
    padding:'10px'
                }}
              >
                <Typography variant="h5">Gastec</Typography>
                <ReactEcharts showLoading={loading} option={option} />
                
              </div>
              </Paper></Link>

              <Link
          
          color="black"
          to={"/monitoring"}
          style={{ margin: "10px", textDecoration: "none", color: "white",background: "" ,display:'flex',justifyContent:'start',maxHeight:"250px",maxWidth:'250px', cursor: "pointer",}}
        > <Paper >
             
             <div
               style={{
                height: "270px",
  width: "270px", 
  padding:'10px'
                }}
              >
                <Typography variant="h5">Gastec</Typography>
                <ReactEcharts showLoading={loading} option={option} />
                
              </div>
              </Paper></Link>


              </FieldRow>
              
            
               
                
                
               
                
              
            </FieldCard>
            
          </FieldRow>
          
        </FieldColumn>
        
      </FieldView>
    </div>
  );
}

export default SetTwinView;
