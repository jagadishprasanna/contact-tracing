"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactTracing = exports.getContactTracing = exports.createContactTracing = void 0;
var Events_1 = require("../models/Events");
require("reflect-metadata");
var service_1 = require(".././service");
var di_container_1 = __importDefault(require(".././di-container"));
var EventSource_1 = require("../Implementations/EventSource");
var service = di_container_1.default.resolve(service_1.Service);
var eventSink = di_container_1.default.resolve(EventSource_1.EventSink.EventSource);
var CONTACT_TRACING = [];
var kafkaHost = 'localhost:9092';
exports.createContactTracing = function (req, res, next) {
    var text = req.body.text;
    var newEvent = new Events_1.Events(Math.random().toString(), text, new Date());
    CONTACT_TRACING.push(newEvent);
    /*const postEvent = () => {
      try {
        return Axios.post('http://localhost:8088/ksql',{
          "ksql": "INSERT INTO riderLocations (profileId, latitude, longitude) VALUES ('c2309eec', 37.7877, -122.4205);",
          "streamsProperties": {}
        })
      } catch (error) {
        console.error(error)
      }
    }
    
    const postEvents = async () => {
      const event = postEvent()!
        .then(response => {
           console.log(response.data);
        })
        .catch(error => {
          console.log(error)
          throw error;
        })
    }
   
    postEvents();
    */
    console.log(eventSink.recordEvent());
    res.status(201).json({ message: 'Created the todo.', createdTodo: newEvent });
};
exports.getContactTracing = function (req, res, next) {
    res.json({ todos: CONTACT_TRACING });
    console.log(service.getAllNames());
    //console.log(eventSink.recordEvent());
};
exports.updateContactTracing = function (req, res, next) {
    var eventID = req.params.id;
    var updatedText = req.body.text;
    var event = CONTACT_TRACING.findIndex(function (todo) { return todo.eventID === eventID; });
    if (event < 0) {
        throw new Error('Could not find todo!');
    }
    CONTACT_TRACING[event] = new Events_1.Events(CONTACT_TRACING[event].eventID, updatedText, new Date());
    res.json({ message: 'Updated!', updatedTodo: CONTACT_TRACING[event] });
};
/*
export const deleteContactTracing: RequestHandler = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = CONTACT_TRACING.findIndex(events => Events.eventID === todoId);

  if (todoIndex < 0) {
    throw new Error('Could not find todo!');
  }

  CONTACT_TRACING.splice(todoIndex, 1);

  res.json({ message: 'Todo deleted!' });
};
*/ 
