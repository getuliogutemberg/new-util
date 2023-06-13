import React from "react";
import FieldCard from "../components/FieldCard";
import FieldRow from "../components/FieldRow";
import FieldColumn from "../components/FieldColumn";
import FieldView from "../components/FieldView";
import FieldRecomendations from "../components/FieldRecomendations";
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

  // const navigate = useNavigate();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
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

      <FieldView flexGrow={1} hidden={layout.FieldView.hidden}>
        <FieldColumn
          flexGrow={0}
          hidden={layout.FieldColumn.hidden}
          showFieldRecomendations={!layout.FieldRecomendations.hidden}
        >
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={0} hidden={0} title="Historicos de Dados" subtitle=""  >
            <Space direction="vertical" size={20} style={{width:"95%",flexGrow:1,margin:"0 auto"}}>
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
      </InfiniteScroll></div>
              
            </Space>
      <Button type="primary" htmlType="submit" style={{background:"#124251", }}>
        Consultar
      </Button>
            
            </FieldCard>
          </FieldRow>
        </FieldColumn>
        <FieldColumn
          flexGrow={1}
          hidden={layout.FieldColumn.hidden}
          showFieldRecomendations={!layout.FieldRecomendations.hidden}
        >
          <FieldRow
            flexGrow={layout.FieldRow.flexGrow}
            hidden={layout.FieldRow.hidden}
          >
            <FieldCard flexGrow={1} hidden={false} title="Consulta" subtitle="Dia/Mes/Ano - Dia/Mes/Ano" >
              
              
              <div style={{display:"flex",flexGrow:1,margin:"10px",flexDirection:"column"}}>
            

              <ReactEcharts option={{
    tooltip: {
      
        
    
      
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['蒸发量', '降水量', '平均温度']
    },
    xAxis: [
      
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              
              snap: true,
              label: {
                show: true,
                
              },}
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'ml',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
            
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
               
                formatter: '{value} °C'
            }
        },
         {
            offset:60,
            type: 'value',
            name: 'metro',
            min: 0,
            max: 900,
            interval: 50,
            axisLabel: {
                formatter: '{value} m'
            }
        }
    ],
    series: [
        {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
}
} style={{flexGrow:1,border:'',justifyContent:'center',alignItems:'center',display:'flex'}}/>
              </div>
             
          </FieldCard>
          </FieldRow>
        </FieldColumn>
      </FieldView>
    </div>
  );
}

export default SensorDataView;
