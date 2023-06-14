import React from "react";
import FieldCard from "../components/FieldCard";
import FieldRow from "../components/FieldRow";
import FieldColumn from "../components/FieldColumn";
import FieldView from "../components/FieldView";
import FieldRecomendations from "../components/FieldRecomendations";
import { useState} from "react";
// import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle, Stack } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import { Typography } from "antd";

function RecomendationView({ showRecomendation = false }) {
  const [ selected, setSelected ] = useState({title:'',subtitle:'',description:'',recomendation:'',eficiencia:'',variaveis:''});
  const layout = {
    FieldRecomendations: {
      hidden: showRecomendation,
      flexGrow: 1,
    },
    FieldView: {
      hidden: false,
      flexGrow:0,
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

  // const navigate = useNavigate();
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
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisPointer: {
              
        snap: true,
        label: {
          show: true,
          
        },}
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line'
      }
    ]
  }; 

  return (
    <div
      style={{
        height: "calc(100vh - 65px)",
        overflowX: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FieldRecomendations
        flexGrow={layout.FieldRecomendations.flexGrow}
        hidden={layout.FieldRecomendations.hidden}
      />

      <FieldView flexGrow={0} hidden={layout.FieldView.hidden}>
        <FieldColumn
          flexGrow={layout.FieldColumn.flexGrow}
          hidden={layout.FieldColumn.hidden}
          showFieldRecomendations={!layout.FieldRecomendations.hidden}
          
        >
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
            
          >
            <FieldCard flexGrow={1} hidden={false} title="Recomendações" subtitle=""  >
              <Stack spacing={1} style={{ margin: "10px" ,minWidth:'400px'}} flexGrow={1}>
              
              {[{
              variant:"filled",
              severity:"error",
              title:'Recomendacao',
              subtitle:'subtitulo 1',
              description:'descricao 1',
              recomendation:[{ sensor:'sensor 1',value:'100',recomendation:'150',unit:'%'},{ sensor:'sensor 2',value:'50',recomendation:'70',unit:'%'},{ sensor:'sensor 3',value:'100',recomendation:'10',unit:'%'},{ sensor:'sensor 4',value:'100',recomendation:'50',unit:'%'}],
              eficiencia:{value:'eficiencia',
                          time:''},
              variaveis:[
                {value:'100',
              time:''},
                {value:'20',
              time:''},
                {value:'30',
              time:''}]
              },
              {
                variant:"filled",
                severity:"success",
                title:'Fim da recomendacao',
                subtitle:'subtitulo 2',
                description:'descricao 2',
                recomendation:[{ sensor:'sensor 1',value:'100',recomendation:'150',unit:'%'},{ sensor:'sensor 2',value:'50',recomendation:'70',unit:'%'},{ sensor:'sensor 3',value:'100',recomendation:'10',unit:'%'},{ sensor:'sensor 4',value:'100',recomendation:'50',unit:'%'}],

                eficiencia:{value:'eficiencia',
                            time:''},
                variaveis:[
                  {value:'100',
                time:''},
                  {value:'20',
                time:''},
                  {value:'30',
                time:''}]
                }].map((element)=>{
                return <Alert variant={element.variant} severity={element.severity}  style={{cursor:"pointer"}} onClick={()=>setSelected(element)}><AlertTitle>{element.title}</AlertTitle> {element.description}</Alert>
              }) }
                {/* <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="warning"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="success"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="info"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:' ',subtitle:' ',description:' ',recomendation:' '})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
               
               
                <Alert variant="filled" severity="success"  style={{cursor:"pointer"}}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:' ',subtitle:' ',description:' ',recomendation:' '})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
               
               
                <Alert variant="filled" severity="success"  style={{cursor:"pointer"}}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:' ',subtitle:' ',description:' ',recomendation:' '})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
               
               
                <Alert variant="filled" severity="success"  style={{cursor:"pointer"}}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:' ',subtitle:' ',description:' ',recomendation:' '})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
               
               
                <Alert variant="filled" severity="success"  style={{cursor:"pointer"}}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:' ',subtitle:' ',description:' ',recomendation:' '})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
               
               
                <Alert variant="filled" severity="success"  style={{cursor:"pointer"}}><AlertTitle>Titulo</AlertTitle> dadasd</Alert> */}
              </Stack>
            </FieldCard>
          </FieldRow>
        </FieldColumn>
        <FieldColumn
          flexGrow={8}
          hidden={layout.FieldColumn.hidden}
          showFieldRecomendations={!layout.FieldRecomendations.hidden}
          
        >
          <FieldRow
            flexGrow={1}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false} title={selected.title} subtitle={selected.subtitle}><div style={{display:"flex",flexGrow:1}}>
            <div style={{display:"flex",flexGrow:1,margin:"10px"}}>
              <Typography>{selected.description}</Typography>
            </div>
            <div style={{display:"flex",flexGrow:1,margin:"10px",maxWidth:'50%',flexWrap:'wrap',overflow:'auto',height:'20vh'}}>{selected.recomendation && selected.recomendation.map((element)=>{return <FieldCard style={{padding:'10px',}} title={element.sensor} subtitle={element.unit}><Typography.Title  level={3} style={{ margin: 10 , fontWeight:''}}>{element.value} - {element.recomendation}</Typography.Title></FieldCard> })}</div></div>
            </FieldCard>
          </FieldRow>

          <FieldRow flexGrow={1} hidden={layout.FieldRow.hidden} >
                <Stack spacing={0} style={{ margin: "0px" ,display:"flex",flexGrow:1,maxWidth: "50%"}} >
            <FieldCard flexGrow={1} hidden={false} title="Variavel 1" subtitle="" >
              
              
                
              

                <ReactEcharts option={option} style={{flexGrow:1,border:'',justifyContent:'stretch',alignItems:'center',display:'flex',flexDirection:'column',margin:'0px',padding:'0px',height:'22vh'}}/>
                
               
            </FieldCard>
            <FieldCard flexGrow={1} hidden={false} title="Variavel 2" subtitle="" >
              
              
             
            

            <ReactEcharts option={option} style={{flexGrow:1,border:'',justifyContent:'stretch',alignItems:'center',display:'flex',flexDirection:'column',margin:'0px',padding:'0px',height:'22vh'}}/>
              
             
          </FieldCard>
          <FieldCard flexGrow={1} hidden={false} title="Variavel 3" subtitle="" >
              
              
              
            

          <ReactEcharts option={option} style={{flexGrow:1,border:'',justifyContent:'stretch',alignItems:'center',display:'flex',flexDirection:'column',margin:'0px',padding:'0px',height:'22vh'}}/>
              
             
          </FieldCard>
                </Stack>
             
              
              
            <FieldCard flexGrow={1} hidden={false} title="Eficiencia" subtitle="">
              
              
              

            <ReactEcharts option={option} style={{flexGrow:1,border:'',justifyContent:'stretch',alignItems:'center',display:'flex',flexDirection:'column',margin:'0px',padding:'0px',height:'22vh'}}/>
                
                
             
            </FieldCard>
          </FieldRow>

        </FieldColumn>
      </FieldView>
    </div>
  );
}

export default RecomendationView;
