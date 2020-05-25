import "reflect-metadata";
import { Service } from "./service";
import DIContainer from "./di-container";
import { EventSink } from "./Implementations/EventSource";
import { IEventSink } from "./Interfaces/IEventSource";

const service: Service = DIContainer.resolve<Service>(Service);
const eventSink: EventSink.EventSource = DIContainer.resolve<IEventSink.IEventSource>(EventSink.EventSource);
console.log(service.getAllNames());
console.log(eventSink.recordEvent());
