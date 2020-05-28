import { injectable } from "inversify";
import { IEventSink } from "../Interfaces/IEventSource";
import * as eventData from "../Interfaces/IEventSource";
import Axios from 'axios';
import "reflect-metadata";
import * as _ from "lodash";
import { String, StringBuilder } from 'typescript-string-operations';

export module EventSink{

  

  @injectable()
  export class EventSource implements IEventSink.IEventSource {
  
    name: string = "eventRecorded";
   // evt: IEventSink.eventData;
   
    public recordEvent(event: IEventSink.eventData): any {

      let val = String.Format("INSERT INTO eventLog (eventID, userID, placeID, eventTime) VALUES ('{0}', '{1}', '{2}','{3}');", event.eventID,event.userID,event.placeID,event.eventTime);
      console.log(val);
      const postEvent = () => {
        try {
          return Axios.post('http://localhost:8088/ksql',{
            "ksql": val,
            "streamsProperties": {}
          })
          .then(function (response) {
            console.log(response.status);
          })
        } catch (error) {
          console.error(error);
        }
      }
      
      const postEvents = async () => {
        const event = postEvent()!
          .catch(error => {
            console.log(error)
            throw error;
          })
      }
     
      postEvents();
      //return this.name;
    }
  }
}
