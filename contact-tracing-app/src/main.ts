import "reflect-metadata";
import { Service } from "./service";
import DIContainer from "./di-container";
import { EventSink } from "./Implementations/EventSource";
import { IEventSink } from "./Interfaces/IEventSource";
//import * as dotenv from "dotenv";
import { resolve } from "path";

import { config } from "dotenv";
import "./lib/env";


const service: Service = DIContainer.resolve<Service>(Service);
const eventSink: EventSink.EventSource = DIContainer.resolve<IEventSink.IEventSource>(EventSink.EventSource);
console.log(service.getAllNames());
//console.log(eventSink.recordEvent());



console.log(`Current NODE_ENV is ${process.env.NODE_ENV}`)

console.log(`Sample key is ${process.env.SAMPLE_KEY}`)



//config({ path: resolve(__dirname, "../../.env.dev")});
 

//console.log(`Current NODE_ENV is ${process.env.NODE_ENV}`);

//console.log(`Sample key is ${process.env.SAMPLE_KEY}`);

