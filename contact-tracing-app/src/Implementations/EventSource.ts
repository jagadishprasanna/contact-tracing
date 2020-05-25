import { injectable } from "inversify";
import { IEventSink } from "../Interfaces/IEventSource";
import Axios from 'axios';
import "reflect-metadata";


export module EventSink{
  @injectable()
  export class EventSource implements IEventSink.IEventSource {
    name: string = "eventRecorded";

    public recordEvent(): any {
      
      const postEvent = () => {
        try {
          return Axios.post('http://localhost:8088/ksql',{
            "ksql": "INSERT INTO riderLocations (profileId, latitude, longitude) VALUES ('c2309eec', 37.7877, -122.4205);",
            "streamsProperties": {}
          })
          .then(function (response) {
            console.log(response);
          })
        } catch (error) {
          console.error(error)
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
