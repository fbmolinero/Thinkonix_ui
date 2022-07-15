import axios from "axios";
/* axios.defaults.timeout = 5000; */

const BASE_URL = "https://thinkonyx-multicalc.thinkserver.thinkseg.com";
                          
const httpClient = axios.create({
  baseURL: BASE_URL,
});

export default httpClient;
