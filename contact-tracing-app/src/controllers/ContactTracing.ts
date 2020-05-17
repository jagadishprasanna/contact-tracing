import { RequestHandler } from 'express';
import { KafkaClient as Client, Producer, ProduceRequest } from 'kafka-node';
import { Events as ContactTracing, Events } from '../models/Events';
import Axios from 'axios';

const CONTACT_TRACING: ContactTracing[] = [];
const kafkaHost = 'localhost:9092';

export const createContactTracing: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newEvent = new ContactTracing(Math.random().toString(), text, new Date());

  CONTACT_TRACING.push(newEvent);

  
  const postEvent = () => {
    console.log("in the breeds");
    try {
      return Axios.post('http://localhost:8088/ksql',{
        "ksql": "LIST STREAMS;",
        "streamsProperties": {}
      })
    } catch (error) {
      console.error(error)
    }
  }
  
  const postEvents = async () => {
    const breeds = postEvent()!
      .then(response => {
         console.log(response.data);
      })
      .catch(error => {
        console.log(error)
        throw error;
      })
  }

  postEvents();
  res.status(201).json({ message: 'Created the todo.', createdTodo: newEvent });
};

export const getContactTracing: RequestHandler = (req, res, next) => {
  res.json({ todos: CONTACT_TRACING });
};

export const updateContactTracing: RequestHandler<{ id: string }> = (req, res, next) => {
  const eventID = req.params.id;

  const updatedText = (req.body as { text: string }).text;

  const event = CONTACT_TRACING.findIndex(todo => todo.eventID === eventID);

  if (event < 0) {
    throw new Error('Could not find todo!');
  }

  CONTACT_TRACING[event] = new ContactTracing(CONTACT_TRACING[event].eventID, updatedText,new Date());

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