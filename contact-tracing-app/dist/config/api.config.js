"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qs = require("qs");
exports.API_TIMEOUT = Number(process.env.API_TIMEOUT) || 10000;
exports.API_BASE_URL = process.env.API_BASE_URL || "";
exports.apiConfig = {
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
    paramsSerializer: (params) => qs.stringify(params, { indices: false })
};
