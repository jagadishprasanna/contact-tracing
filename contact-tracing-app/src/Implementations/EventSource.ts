import { injectable } from "inversify";
import { IEventSink } from "../Interfaces/IEventSource";
export module EventSink{
  @injectable()
  export class EventSource implements IEventSink.IEventSource {
    name: string = "eventRecorded";

    public recordEvent(): string {
      return this.name;
    }
  }
}
