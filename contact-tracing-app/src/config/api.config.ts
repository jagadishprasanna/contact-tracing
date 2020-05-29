import { AxiosRequestConfig } from "axios";
const qs = require("qs");
export const API_TIMEOUT = Number(process.env.API_TIMEOUT) || 10000;
export const API_BASE_URL = process.env.API_BASE_URL || "";

export const apiConfig: AxiosRequestConfig = {
    withCredentials: true,
    timeout: 6000,
    baseURL: "http://localhost:8088/ksql",
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    },
    paramsSerializer: (params: string) => qs.stringify(params, { indices: false })
};