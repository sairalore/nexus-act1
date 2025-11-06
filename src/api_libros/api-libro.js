
import axios from "axios";
const API_URL = "";

const axiosApi = axios.create({
    baseURL: API_URL,
});

export async function get(url, params, config = {}) {
    return await axiosApi.get(url, { ...config, params: { ...params } }).then((response) => response.data);
}


