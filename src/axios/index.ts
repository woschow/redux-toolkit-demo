import axios from "axios"

import { AppSettings } from "../appSettings";

console.log('REACT_APP_BASE_URL', AppSettings.apiBaseUrl);

const axiosClient = axios.create({

    baseURL: AppSettings.apiBaseUrl
})

export default axiosClient;
