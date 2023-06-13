import React, { useEffect } from "react";
import FieldCard from "../components/FieldCard";
import FieldRow from "../components/FieldRow";
import FieldColumn from "../components/FieldColumn";
import FieldView from "../components/FieldView";
import FieldRecomendations from "../components/FieldRecomendations";
import { useLocation, Link } from "react-router-dom";
import logoAsa from  '../Assets/Images/logo_asa.png'


import { useState } from "react";
import { Paper } from "@mui/material";



function SetClientView({}) {
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
            <FieldCard flexGrow={1} hidden={false} title="Painel de Clientes" subtitle="" >
              {/* <MyGraph /> */}
              
              
              <FieldRow >
              <Link
          key={"Login"}
          color="black"
          to={"/setTwin"}
          style={{ margin: "10px", textDecoration: "none", color: "white",background: "" ,display:'flex',justifyContent:'start',maxHeight:"150px",maxWidth:'200px'}}
        > <Paper >
             
              <img
              src={logoAsa}
              alt="Logo"
              className="Logo"
              loading="lazy"
              style={{maxHeight:"150px",maxWidth:'200px'}}
              
              
              />
              </Paper></Link>
              <Link
          key={"Login"}
          color="black"
          to={"/setTwin"}
          style={{ margin: "10px", textDecoration: "none", color: "white",background: "" ,display:'flex',justifyContent:'start',maxHeight:"150px",maxWidth:'200px'}}
        > <Paper >
             
              <img
              src={logoAsa}
              alt="Logo"
              className="Logo"
              loading="lazy"
              style={{maxHeight:"150px",maxWidth:'200px'}}
              
              
              />
              </Paper></Link>

              <Link
          key={"Login"}
          color="black"
          to={"/setTwin"}
          style={{ margin: "10px", textDecoration: "none", color: "white",background: "" ,display:'flex',justifyContent:'start',maxHeight:"150px",maxWidth:'200px'}}
        > <Paper >
             
              <img
              src={logoAsa}
              alt="Logo"
              className="Logo"
              loading="lazy"
              style={{maxHeight:"150px",maxWidth:'200px'}}
              
              
              />
              </Paper></Link></FieldRow>
              
            
               
                
                
               
                
              
            </FieldCard>
            
          </FieldRow>
          
        </FieldColumn>
        
      </FieldView>
    </div>
  );
}

export default SetClientView;
