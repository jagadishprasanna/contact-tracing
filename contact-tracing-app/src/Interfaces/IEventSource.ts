export module IEventSink {
  export interface IEventSource {
    name: string ;

    recordEvent(): string;
  }  
}

