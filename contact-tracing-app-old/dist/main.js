"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var service_1 = require("./service");
var di_container_1 = __importDefault(require("./di-container"));
var service = di_container_1.default.resolve(service_1.Service);
console.log(service.getAllNames());
