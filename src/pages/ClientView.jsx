import React from "react";

import FieldRecomendations from "../components/FieldRecomendations";

import { GraphchartCard }  from '@getuliogutemberg/react-hub'




function ClientView() {
  const [recomendations,setRecomandations] = React.useState(
    [
      {
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
          severity:"error",
          title:'Recomendacao',
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
          },{
            variant:"filled",
            severity:"error",
            title:'Recomendacao',
            subtitle:'subtitulo 3',
            description:'descricao 3',
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
            },{
              variant:"filled",
              severity:"error",
              title:'Recomendacao',
              subtitle:'subtitulo 4',
              description:'descricao 4',
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
    ]
  )
  const [graphs, setGraphs] = React.useState([
    { grow:1,
      title:"teste1",
      subtitle:"",
      gemeo:1 ,
      apiAddress:"http://localhost.com" ,
      sensores:[],
    },
    { grow:1,
      title:"teste2",
      subtitle:"",
      gemeo:1 ,
      apiAddress:"http://localhost.com" ,
      sensores:[],
    },
    { grow:1,
      title:"teste3",
      subtitle:"",
      gemeo:1 ,
      apiAddress:"http://localhost.com" ,
      sensores:[],
    },
    
    
  ]);
  
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

  


  



  
  
  return (
    <div style={{ maxHeight: "100%" ,overflowY:'scroll',display:graphs.length > 3 ? '' : 'flex',flexDirection:'column'}}>
    <FieldRecomendations
        
        flexGrow={layout.FieldRecomendations.flexGrow}
        hidden={layout.FieldRecomendations.hidden}
        recomendations ={recomendations}
    />
    {graphs.map((graph)=>{
      return <GraphchartCard chartType='bar' flexGrow={graph.grow} title={graph.title} subtitle={graph.subtitle} gemeo={graph.gemeo} apiAddress={graph.apiAddress} sensores={graph.sensores}/>
    })}
    
      </div>
  );
}

export default ClientView;
