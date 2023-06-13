import React from "react";
import FieldCard from "../components/FieldCard";
import FieldRow from "../components/FieldRow";
import FieldColumn from "../components/FieldColumn";
import FieldView from "../components/FieldView";
import FieldRecomendations from "../components/FieldRecomendations";
import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle, Stack } from "@mui/material";

function RecomendationView({ showRecomendation = false }) {
  const [ selected, setSelected ] = useState({title:'',subtitle:'',description:'',recomendation:'',eficiencia:'',variaveis:''});
  const layout = {
    FieldRecomendations: {
      hidden: showRecomendation,
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

  const navigate = useNavigate();

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
            <FieldCard flexGrow={1} hidden={false} title="Recomendações" subtitle=""  >
              <Stack spacing={1} style={{ margin: "10px" ,display:"flex",flexGrow:1}}>
              

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
          flexGrow={10}
          hidden={layout.FieldColumn.hidden}
          showFieldRecomendations={!layout.FieldRecomendations.hidden}
        >
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false} title={selected.title} subtitle={selected.subtitle}><div style={{display:"flex",flexGrow:1}}>
            <div style={{display:"flex",flexGrow:1,margin:"10px"}}>{selected.description}</div>
            <div style={{display:"flex",flexGrow:1,margin:"10px"}}>{selected.recomendation}</div></div>
            </FieldCard>
          </FieldRow>
          <FieldRow flexGrow={100} hidden={layout.FieldRow.hidden}>
            <FieldCard flexGrow={1} hidden={false} title="Variaveis" subtitle="">
              <div style={{display:"flex",flexGrow:1,flexDirection:"column"}}>
              <div style={{display:"flex",flexGrow:1,margin:"10px"}}>{selected.variaveis}</div>
              {/* <div style={{display:"flex",flexGrow:1,margin:"10px"}}>{selected.recomendation}</div> */}
              </div>
            </FieldCard>
            <FieldCard flexGrow={1} hidden={false} title="Eficiencia" subtitle="">
              <div style={{display:"flex",flexGrow:1,flexDirection:"column"}}>
              <div style={{display:"flex",flexGrow:1,margin:"10px"}}>{selected.eficiencia}</div>
              {/* <div style={{display:"flex",flexGrow:1,margin:"10px"}}>{selected.recomendation}</div> */}
              </div>
            </FieldCard>
          </FieldRow>
        </FieldColumn>
      </FieldView>
    </div>
  );
}

export default RecomendationView;
