import axios from "axios";
import moment from "moment";

const ChartServices = {

    getGraphsByTwin: async function(id) {
        // console.log('/ditwins/graphs/',id)
        const graphs = await axios.get(`http://localhost:3001/ditwins/graphs/${id}`);
        return graphs;
    },
    get_digitalTwins: async function (id) {
        const twins = await axios.get(`http://localhost:3001/ditwins/company/${id}`);
        return twins;
      },
    get_groups: async function () {
    const axiosResponse = await axios.get(`http://localhost:3001/groups/`);
    return axiosResponse.data;
    },
    fetchMonitoringHistoricData: async function (
        address,
        sensorId,
        deviceId,
        timeToFetch,
        timeUnit
      ) {
        const currentDate = moment().add(3, "hours");
        const currentYear = currentDate.year();
        //Mês vai de 0 a 11
        const currentMonth = ("0" + (currentDate.month() + 1)).slice(-2);
        const currentDay = ("0" + currentDate.date()).slice(-2);
        const currentHour = ("0" + currentDate.hour()).slice(-2);
        const currentMinute = ("0" + currentDate.minute()).slice(-2);
        //Por padrão, essa função pega dados de agora até timeToFetch unidades de tempo no passado
        const pastDate = moment().subtract(timeToFetch, timeUnit);
        const pastYear = pastDate.year();
        //Mês vai de 0 a 11
        const pastMonth = ("0" + (pastDate.month() + 1)).slice(-2);
        const pastDay = ("0" + pastDate.date()).slice(-2);
        const pastHour = ("0" + pastDate.hour()).slice(-2);
        const pastMinute = ("0" + pastDate.minute()).slice(-2);
    
        try {
          const axiosResponse = await axios.get(
            `http://localhost:3001/newApi/get_raw_info?address=${address}&deviceId=${deviceId}&dayofweek=1&sensorId=${sensorId}&start_datetime=${pastYear}-${pastMonth}-${pastDay}T${pastHour}:${pastMinute}:00.0-0300&end_datetime=${currentYear}-${currentMonth}-${currentDay}T${currentHour}:${currentMinute}:00.0-0300`
          );
          return axiosResponse.data;
        } catch (e) {
          return [];
        }
      },

      getAlertsByTwin: async function (id) {
        const start = moment()
          .set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
          })
          .toISOString();
        const end = moment().toISOString();
    
        const currentAlerts = await axios
          .get(`http://localhost:3001/alerts?digital_twin_id=${id}&gt=${start}&lt=${end}`)
          .then((res) => {
            // console.log(res,`/alerts?digital_twin_id=${id}&gt=${start}&lt=${end}`)
    
            return res;
          });
    
        return currentAlerts.data.sort((a, b) => {
          return b.id - a.id;
        });
      },


      getTwinInfoById: async function (id) {
        const twinName = await axios.get(`http://localhost:3001/ditwins/${id}`);
        return twinName;
      },
}

export default ChartServices;