export module IEventSink {
  
  export class eventData 
  {
      eventID: string = ""
      userID: string = "";
      placeID: string = "";
      eventTime: string =  Date.now().toString();

      constructor(evtid:string, userid: string, placeid: string)
      {
        this.eventID = evtid;
        this.userID = userid;
        this.placeID = placeid;
      }
  }

  export interface IEventSource {
    name: string ;
   // evt: eventData;
    
    
    recordEvent(event: eventData): any;
  }  
}

