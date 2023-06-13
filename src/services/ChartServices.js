import axios from "axios";


const ChartServices = {

    getGraphsByTwin: async function(id) {
        // console.log('/ditwins/graphs/',id)
        const graphs = await axios.get(`http://localhost:3001/ditwins/graphs/${id}`);
        
        return graphs;
    }
}

export default ChartServices;