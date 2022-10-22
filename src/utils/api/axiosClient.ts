import axios from "axios";
import {BASE_API_URL} from "../constants/constants";

export const axiosClient = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        "Access-Control-Allow-Origin": true,
        'Access-Control-Allow-Methods': "GET"
    },
    withCredentials: false,
})

axiosClient.interceptors.response.use((config) => {
        return config
    }, async (error) => {
        // TODO
        throw error
        // throw axios.isAxiosError(error) ? transformAxiosError(error) : error;
    }
)
