import { injectable } from "inversify";
import { IEventSink } from "../Interfaces/IEventSource";
import Axios from 'axios';
import "reflect-metadata";
import * as _ from "lodash";
import { String, StringBuilder } from 'typescript-string-operations';
import "../lib/env";

export module EventSink{

  

  @injectable()
  export class EventSource implements IEventSink.IEventSource {
   
    
    name: string = "eventRecorded";
    
    public recordEvent(event: IEventSink.eventData): any {

      console.log(`Current NODE_ENV is ${process.env.NODE_ENV}`)

      console.log(`Sample key is ${process.env.SAMPLE_KEY}`)

      var kafka_source  = process.env.KAFKA_SOURCE!;
      console.log(kafka_source);
      let val = String.Format("INSERT INTO eventLog (eventID, userID, placeID, eventTime) VALUES ('{0}', '{1}', '{2}','{3}');", event.eventID,event.userID,event.placeID,event.eventTime);
      console.log(val);
      const postEvent = () => {
        try {
          return Axios.post(kafka_source,{
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
