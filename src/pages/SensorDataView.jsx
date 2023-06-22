import React from "react";

import {  FieldCard, FieldRecomendations, GraphchartCardMultiUnit}  from '@getuliogutemberg/react-hub'
import ChartServices from "../services/ChartServices";

import { useEffect ,useState} from "react";
// import { useNavigate } from "react-router-dom";
import { DatePicker ,Space,Select,Checkbox,List,Skeleton, Divider,Button} from 'antd';
import { Typography } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactEcharts from "echarts-for-react";


function SensorDataView({ showRecomendation = false }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);

  const { RangePicker } = DatePicker;
  const [recomendations , setRecomendations] = useState();

  // const navigate = useNavigate();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div style={{display:'flex',flexGrow:1,width:'500px'}}>
      {recomendations && <FieldRecomendations
      services={ChartServices}
      
      recomendations ={recomendations}
      />}

          <div style={{display:'flex',flexGrow:1,flexFlow:'row'}}> 
            <FieldCard title="Historicos de Dados" subtitle=""  >
            
              <Typography >Periodo:</Typography>
              <RangePicker />
              <Typography > Unidade Fabril :</Typography>
              <Select
      defaultValue="lucy"
      style={{
        
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />

<Typography >Setor:</Typography>
              <Select
      defaultValue="lucy"
      style={{
        
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />

<Typography >Sensores:</Typography>
<div
      id="scrollableDiv"
      style={{
        height: 'calc(100vh - 550px)',
        minHeight:'300px',
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 100}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain></Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <Checkbox><List.Item.Meta
                // avatar={<Avatar src={item.picture.large} />}
                title={<a href="#">{item.name.last}</a>}
                description={item.email}
              />
              <div>Content</div></Checkbox>
            </List.Item>
          )}
        />
      </InfiniteScroll>
      </div>
              
           
      <Button type="primary" htmlType="submit" style={{background:"#124251", }}>
        Consultar
      </Button>
            
            </FieldCard>
            
          </div>
        


          <GraphchartCardMultiUnit title="Consulta" subtitle="" /> 
        

             
            
        
      </div>
  );
}

export default SensorDataView;
