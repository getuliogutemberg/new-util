import React,{useState} from "react";
import FieldCard from "../components/FieldCard";
import { ClientCard } from '@getuliogutemberg/react-hub'
import ChartServices from "../services/ChartServices";

function SetClientView() {
  const [clients, setClients] = useState([]);
  React.useEffect(() => {
      ChartServices.get_groups().then((response) => {
        setClients(response.map(obj => {
          let logo = null;
          if (obj.name === "Asa") {
            logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpUtluYxaw5hQdJvhd9taZN2PawkDEWIo2ZHkpA9dDvnQ6BRxajuvdlmWBSHvCG0AM6A&usqp=CAU";
          } else if (obj.name === "Vivix") {
            logo = "https://abividro.org.br/wp-content/uploads/2017/11/marca_vivix3-1.jpg";
          } else if (obj.name === "Roca") {
            logo = "https://logos-world.net/wp-content/uploads/2023/01/Roca-Logo.png";
          }
        
          return {
            id: obj.id,
            name: obj.name,
            logo: logo
          };
        }));
      })
},[])
  

  return (
    <div style={{ maxHeight: "100%" ,overflowY:'scroll'}}>
      
      <FieldCard title="Painel de Clientes" subtitle="">
      <div style={{display:'flex',flexDirection:'row',height:'calc(100vh - 120px)'}}>
      
              
              { clients.length > 0 && clients.map((client)=>{
                return <ClientCard name={client.name} id={client.id} logo={client.logo}/>
              })}
             
      </div>
      </FieldCard>
    </div>
  );
}

export default SetClientView;
