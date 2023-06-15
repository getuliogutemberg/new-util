// import CircularProgress from "@mui/material/CircularProgress";
// import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import AlertTitle from '@mui/material/AlertTitle';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Alert from '@mui/material/Alert';
import React from "react";
import Stack from '@mui/material/Stack';

const FieldRecomendations = ({
  flexGrow,
  title = "Titulo",
  subtitle = "Subtitulo",
  chart,
  hidden = false,
  recomendations
}) => {
  return (

    recomendations && recomendations[(recomendations.length - 1)] ? <div
      style={{
        flexDirection: "column",
        display: !hidden ? recomendations.length > 0 ? "flex" : "none" : "none",
        flexGrow: flexGrow,
      }}
    >
      <Accordion disabled={false}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{boxSizing: 'border-box',height: '50px',padding:0}}
        >
          <Alert variant={recomendations[recomendations.length-1].variant} severity={recomendations[recomendations.length-1].severity} style={{display: 'flex', justifyContent: 'start', alignItems: 'center',background:'',flexGrow:1}}>
            { recomendations[recomendations.length-1].title } { recomendations[recomendations.length-1].subtitle }
          </Alert>
          
          {/* <Typography>Notificacoes</Typography> */}
          {/* <Alert variant="filled" severity="error" style={{display: 'flex', justifyContent: 'start', alignItems: 'center',background:'',flexGrow:1}}> */}
          {/* <AlertTitle>Error</AlertTitle> */}
  {/* This is an error alert — <strong>check it out!</strong>
          </Alert> */}
        </AccordionSummary>
        <AccordionDetails>
        <Stack sx={{ width: '100%' }} spacing={2}>
          {recomendations.map((recomendation, index) => {
            
            return (
             index !== recomendations.length -1 && <Alert variant={recomendation.variant} severity={recomendation.severity} style={{display: 'flex', justifyContent: 'start', alignItems: 'center',background:'',flexGrow:1}}>
            { recomendation.title } { recomendation.subtitle }
          </Alert>
            );
          }).reverse()}
            
        {/* <Alert variant="filled" severity="error" style={{display: 'flex', justifyContent: 'start', alignItems: 'center',background:'',flexGrow:1}}>
            This is an error alert — check it out!
          </Alert>
          <Alert variant="filled" severity="warning" style={{display: 'flex', justifyContent: 'start', alignItems: 'center',background:'',flexGrow:1,backgroundColor:'yellow',color:'black'}}>
            This is an error alert — check it out!
          </Alert>
          <Alert variant="filled" severity="info" style={{display: 'flex', justifyContent: 'start', alignItems: 'center',background:'',flexGrow:1}}>
            This is an error alert — check it out!
          </Alert>

          <Alert variant="filled" severity="success" style={{display: 'flex', justifyContent: 'start', alignItems: 'center',background:'',flexGrow:1}}>
            This is an error alert — check it out!
          </Alert> */}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div> : <div></div>
  );
};

export default FieldRecomendations;
