import axios from "axios";
/* axios.defaults.timeout = 5000; */

const BASE_URL = "https://thinkonyx-multicalc.thinkserver.thinkseg.com";
/* const BASE_URL2 = "https://2e2b-2804-d59-a13d-7100-5cbf-9dd-a8cf-f4db.ngrok.io" */

const httpClient = axios.create({
  baseURL: BASE_URL,
/*   headers:'Access-Control-Allow-Origin: *' */
});

export default httpClient;
