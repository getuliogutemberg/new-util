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
              <Stack spacing={1} style={{ margin: "10px" ,minWidth:'400px'}}>
              

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
               
               
                <Alert variant="filled" severity="success"  style={{cursor:"pointer"}}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:'Titulo',subtitle:'dadasd',description:'description',recomendation:'recomendation',eficiencia:'eficiencia',variaveis:'variaveis'})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
                <Alert variant="filled" severity="error"  style={{cursor:"pointer"}} onClick={()=>setSelected({title:' ',subtitle:' ',description:' ',recomendation:' '})}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
               
               
                <Alert variant="filled" severity="success"  style={{cursor:"pointer"}}><AlertTitle>Titulo</AlertTitle> dadasd</Alert>
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
            <div style={{display:"flex",flexGrow:1,margin:"10px"}}>{selected.description}</div>
            <div style={{display:"flex",flexGrow:1,margin:"10px"}}>{selected.recomendation}</div></div>
            </FieldCard>
          </FieldRow>

          <FieldRow flexGrow={1} hidden={layout.FieldRow.hidden} >
                <Stack spacing={0} style={{ margin: "0px" ,display:"flex",flexGrow:1,maxWidth: "50%"}} >
            <FieldCard flexGrow={1} hidden={false} title="Variavel 1" subtitle="" >
              
              
                <div style={{display:"flex",flexGrow:1,margin:"10px",flexDirection:"column"}}>
              

                <ReactEcharts option={{
              
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
        type: 'line'
      }
    ]
  }} style={{flexGrow:1,border:'',justifyContent:'center',alignItems:'center',display:'flex'}}/>
                </div>
               
            </FieldCard>
            <FieldCard flexGrow={1} hidden={false} title="Variavel 2" subtitle="" >
              
              
              <div style={{display:"flex",flexGrow:1,margin:"10px",flexDirection:"column"}}>
            

              <ReactEcharts option={{
            
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
      type: 'line'
    }
  ]
}} style={{flexGrow:1,border:'',justifyContent:'center',alignItems:'center',display:'flex'}}/>
              </div>
             
          </FieldCard>
          <FieldCard flexGrow={1} hidden={false} title="Variavel 3" subtitle="" >
              
              
              <div style={{display:"flex",flexGrow:1,margin:"10px",flexDirection:"column"}}>
            

              <ReactEcharts option={{
            
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
      type: 'line'
    }
  ]
}} style={{flexGrow:1,border:'',justifyContent:'center',alignItems:'center',display:'flex'}}/>
              </div>
             
          </FieldCard>
                </Stack>
             
              
              
            <FieldCard flexGrow={1} hidden={false} title="Eficiencia" subtitle="">
              
              <div style={{display:"flex",flexGrow:1,margin:"10px",flexDirection:"column"}}>
              

                <ReactEcharts option={{
              
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
        type: 'line'
      }
    ]
  }} style={{flexGrow:0,border:'',justifyContent:'center',alignItems:'center',display:'flex'}}/>
                </div>
                
             
            </FieldCard>
          </FieldRow>

        </FieldColumn>
      </FieldView>
    </div>
  );
}

export default RecomendationView;
