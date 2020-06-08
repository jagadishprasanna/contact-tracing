import { injectable } from "inversify";
import * as eventData from "../Interfaces/IEventSource";
import config from "config";
import Axios from 'axios';
import "reflect-metadata";
import * as _ from "lodash";
import { String, StringBuilder } from 'typescript-string-operations';
import "../lib/env";
import { IUser }  from "../Interfaces/IUserRegister";


export module User{

  @injectable()
  export class UserRegister implements IUser.IUserRegister {
   
    registerUser(user: IUser.UserData): any {
      console.log("In the registerUser..");
      var kafka_source  = process.env.KAFKA_SOURCE!;
      console.log(kafka_source);
      let val = String.Format("INSERT INTO USERS (userID, phoneNumber, emailID) VALUES ('{0}', '{1}', '{2}');", user.userID, user.phoneNumber, user.emailID);
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
    }
    
    
    }
  }

