import React from "react";
import ChartServices from "../services/ChartServices";



import { GraphchartCard , FieldRecomendations}  from '@getuliogutemberg/react-hub'




function ClientView() {
  const [recomendations,setRecomandations] = React.useState(
    // [
    //   {
    //     variant:"filled",
    //     severity:"error",
    //     title:'Recomendacao',
    //     subtitle:'subtitulo 1',
    //     description:'descricao 1',
    //     recomendation:[{ sensor:'sensor 1',value:'100',recomendation:'150',unit:'%'},{ sensor:'sensor 2',value:'50',recomendation:'70',unit:'%'},{ sensor:'sensor 3',value:'100',recomendation:'10',unit:'%'},{ sensor:'sensor 4',value:'100',recomendation:'50',unit:'%'}],
    //     eficiencia:{value:'eficiencia',
    //                 time:''},
    //     variaveis:[
    //       {value:'100',
    //     time:''},
    //       {value:'20',
    //     time:''},
    //       {value:'30',
    //     time:''}]
    //     },
    //     {
    //       variant:"filled",
    //       severity:"error",
    //       title:'Recomendacao',
    //       subtitle:'subtitulo 2',
    //       description:'descricao 2',
    //       recomendation:[{ sensor:'sensor 1',value:'100',recomendation:'150',unit:'%'},{ sensor:'sensor 2',value:'50',recomendation:'70',unit:'%'},{ sensor:'sensor 3',value:'100',recomendation:'10',unit:'%'},{ sensor:'sensor 4',value:'100',recomendation:'50',unit:'%'}],
    //       eficiencia:{value:'eficiencia',
    //                   time:''},
    //       variaveis:[
    //         {value:'100',
    //       time:''},
    //         {value:'20',
    //       time:''},
    //         {value:'30',
    //       time:''}]
    //       },{
    //         variant:"filled",
    //         severity:"error",
    //         title:'Recomendacao',
    //         subtitle:'subtitulo 3',
    //         description:'descricao 3',
    //         recomendation:[{ sensor:'sensor 1',value:'100',recomendation:'150',unit:'%'},{ sensor:'sensor 2',value:'50',recomendation:'70',unit:'%'},{ sensor:'sensor 3',value:'100',recomendation:'10',unit:'%'},{ sensor:'sensor 4',value:'100',recomendation:'50',unit:'%'}],
    //         eficiencia:{value:'eficiencia',
    //                     time:''},
    //         variaveis:[
    //           {value:'100',
    //         time:''},
    //           {value:'20',
    //         time:''},
    //           {value:'30',
    //         time:''}]
    //         },{
    //           variant:"filled",
    //           severity:"error",
    //           title:'Recomendacao',
    //           subtitle:'subtitulo 4',
    //           description:'descricao 4',
    //           recomendation:[{ sensor:'sensor 1',value:'100',recomendation:'150',unit:'%'},{ sensor:'sensor 2',value:'50',recomendation:'70',unit:'%'},{ sensor:'sensor 3',value:'100',recomendation:'10',unit:'%'},{ sensor:'sensor 4',value:'100',recomendation:'50',unit:'%'}],
    //           eficiencia:{value:'eficiencia',
    //                       time:''},
    //           variaveis:[
    //             {value:'100',
    //           time:''},
    //             {value:'20',
    //           time:''},
    //             {value:'30',
    //           time:''}]
    //           },
    // ]
  )
  const [graphs, setGraphs] = React.useState([]);
  
 

  React.useEffect(()=>{

    ChartServices.getAlertsByTwin(1).then((res)=>{setRecomandations(res)
      
    })
    const interval = setInterval(()=>{
      ChartServices.getAlertsByTwin(1).then((res)=>{setRecomandations(res)
      
      })
    },10000)

    return () => { 
      clearInterval(interval)
      
    }

  },[])

  React.useEffect(()=>{
    ChartServices.getGraphsByTwin(localStorage.getItem('twin_id')).then((res)=>{ 
      // console.log(res.data) 
      setGraphs(res.data) 
    })
  },[])


  return (<>
      {recomendations && <FieldRecomendations
      services={ChartServices}
      
      recomendations ={recomendations}
      />}
    <div style={{ maxHeight: "100%" ,overflowY:'auto'}}>
      
      


        {graphs.map((graph)=>{
          // console.log([...graph.y_axis_1])
          
          
          return  (
          
          <GraphchartCard 
          services={ChartServices}
          key={graph.name}
          chartType={graph.default_visualization} 
          flexGrow={1} 
          title={graph.name} 
          subtitle={''} 
          gemeo={graph.digital_twin_id}
          // apiAddress={graph.apiAddress} 
          sensores={[...graph.y_axis_1]}/>
        
          )

          
          
        })}
  
      
      
      
    
    </div></>
  );
}

export default ClientView;
