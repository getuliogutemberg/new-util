import React from "react";
import FieldCard from "../components/FieldCard";
import { TwinCard } from "@getuliogutemberg/react-hub";
import { useState } from "react";
import ChartServices from "../services/ChartServices";

function SetTwinView(props) {
  const [twins, setTwins] = useState([]);

  React.useEffect(() => {
    
    ChartServices.get_digitalTwins(localStorage.getItem("client_id")).then((res) => {
     
      setTwins(res.data)  
    });

    
  }, []);

  return (
    <div style={{ maxHeight: "100%" ,overflowY:'scroll'}}>
         
      <FieldCard flexGrow={1} hidden={false} title="Painel de Gemeos" subtitle="" >
              
        <div style={{display:'flex',flexDirection:'row',height:'calc(100vh - 120px)'}}>
          
          {twins.map((twin)=>{
            console.log(twin)
          return <TwinCard services={ChartServices} name={twin.name} id={twin.id} api_address={twin.api_address}/>
          }).reverse()}
    
        </div>
            
      </FieldCard>
           
    </div>
  );
}

export default SetTwinView;
