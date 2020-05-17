"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactTracing = exports.getContactTracing = exports.createContactTracing = void 0;
const Events_1 = require("../models/Events");
const axios_1 = __importDefault(require("axios"));
const CONTACT_TRACING = [];
const kafkaHost = 'localhost:9092';
exports.createContactTracing = (req, res, next) => {
    const text = req.body.text;
    const newEvent = new Events_1.Events(Math.random().toString(), text, new Date());
    CONTACT_TRACING.push(newEvent);
    const postEvent = () => {
        console.log("in the breeds");
        try {
            return axios_1.default.post('http://localhost:8088/ksql', {
                "ksql": "LIST STREAMS;",
                "streamsProperties": {}
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    const postEvents = async () => {
        const breeds = postEvent()
            .then(response => {
            console.log(response.data);
        })
            .catch(error => {
            console.log(error);
            throw error;
        });
    };
    postEvents();
    res.status(201).json({ message: 'Created the todo.', createdTodo: newEvent });
};
exports.getContactTracing = (req, res, next) => {
    res.json({ todos: CONTACT_TRACING });
};
exports.updateContactTracing = (req, res, next) => {
    const eventID = req.params.id;
    const updatedText = req.body.text;
    const event = CONTACT_TRACING.findIndex(todo => todo.eventID === eventID);
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
