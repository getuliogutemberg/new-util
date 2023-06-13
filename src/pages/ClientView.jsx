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
      hidden: 0,
      flexGrow: 1,
    },
    FieldView: {
      hidden: 0,
      flexGrow: 1,
    },
    FieldColumn: {
      hidden: 0,
      flexGrow: 1,
    },
    FieldRow: {
      hidden: 0,
      flexGrow: 1,
    },
  };

  


  const option = {
    tooltip: {
      
        
    
      
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          crossStyle: {
              color: '#999'
          }
      }
  },
    grid: {
      top: 50,
      left: 50,
      right: 50,
      bottom: 30,
      // height: '100vh',
    },
    toolbox: {
      
      feature: {
          // dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
      }
  },
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
    <div>
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
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={0} hidden={0} title="Eficiencia instantaneo" subtitle="">
            
              <ReactEcharts option={{
                grid: {
                  top: 50,
                  left: 50,
                  right: 50,
                  bottom: 30,
                  
                  
                },
                toolbox: {
                  feature: {
                      // dataView: {show: true, readOnly: false},
                      // magicType: {show: true, type: ['line', 'bar']},
                      // restore: {show: true},
                      saveAsImage: {show: true}
                  }
              },
    xAxis: {
      type: 'category',
      data:['unit']
      // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [50],
        type: 'gauge'
      }
    ]
  }} style={{flexGrow:1,border:'',justifyContent:'center',alignItems:'center',display:'flex' ,height:'22vh'}} />

            </FieldCard>

            <FieldCard flexGrow={1} hidden={0} title="Eficiencia" subtitle="">
            <ReactEcharts option={option} style={{flexGrow:1,border:'',justifyContent:'stretch',alignItems:'center',display:'flex',height:`22vh`,margin:'0px',padding:'0px'}}/>

            </FieldCard>

            <FieldCard flexGrow={0} hidden={false} title="Recomendacões" subtitle="" >
            <ReactEcharts option={{
              grid: {
                top: 0,
                left: 50,
                right: 50,
                bottom: 30,
                // height:'22vh',
                
              },
              toolbox: {
                feature: {
                    // dataView: {show: true, readOnly: false},
                    // magicType: {show: true, type: ['line', 'bar']},
                    // restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
    xAxis: {
      type: 'category',
      data: ['Alarmado','NaoAlarmado']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200],
        type: 'pie'
      }
    ]
  }} style={{flexGrow:1,border:'',justifyContent:'stretch',alignItems:'center',display:'flex',flexDirection:'column',margin:'0px',height:'22vh'}}/>
           
             

            </FieldCard>
          </FieldRow>
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false} title="Consumo" subtitle="" >
              <ReactEcharts option={option} style={{flexGrow:1,border:'',justifyContent:'stretch',alignItems:'center',display:'flex',flexDirection:'column',margin:'0px',padding:'0px',height:'22vh'}}/>
              
              </FieldCard>
            <FieldCard flexGrow={1} hidden={false} title="Producao" subtitle="" > 

            <ReactEcharts option={option} style={{flexGrow:1,border:'',justifyContent:'stretch',alignItems:'center',display:'flex',flexDirection:'column',margin:'0px',padding:'0px',height:'22vh'}}/>
            
            </FieldCard>
          </FieldRow>
          
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false} title="Variaveis 1" subtitle=""> 


            <ReactEcharts option={option} style={{flexGrow:1,border:'',justifyContent:'stretch',alignItems:'center',display:'flex',flexDirection:'column',margin:'0px',padding:'0px',height:'22vh'}}/>
           
              </FieldCard>
            <FieldCard flexGrow={1} hidden={false} title="Variaveis 2" subtitle="">
                        <ReactEcharts option={option} style={{flexGrow:1,border:'',justifyContent:'stretch',alignItems:'center',display:'flex',flexDirection:'column',margin:'0px',padding:'0px',height:'22vh'}}/>
             
              </FieldCard>
            <FieldCard flexGrow={1} hidden={false} title="Variaveis 3" subtitle=""> 
            <ReactEcharts option={option} style={{flexGrow:1,border:'',justifyContent:'stretch',alignItems:'center',display:'flex',margin:'0px',flexDirection:'column',padding:'0px',height:'22vh'}}/>
            
              </FieldCard>
          </FieldRow>
        </FieldColumn>
      </FieldView>
      </div>
  );
}

export default ClientView;
