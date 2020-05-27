export module IEventSink {
  
  export class eventData 
  {
      profileid: string = "";
      latitude: number = 0.0;
      longitude: number = 0.0;

      constructor(profid:string, long:number, lat:number)
      {
        this.profileid = profid;
        this.latitude = lat;
        this.longitude = long;

      }
  }

  export interface IEventSource {
    name: string ;
   // evt: eventData;
    
    
    recordEvent(event: eventData): any;
  }  
}

