import { RequestHandler } from 'express';
import { Events as ContactTracing, Events } from '../models/Events';
import "reflect-metadata";
import { Service } from "../service";
import DIContainer from "../di-container";
import { EventSink } from "../Implementations/EventSource";
import { IEventSink } from "../Interfaces/IEventSource";
import {plainToClass} from "class-transformer";


const service: Service = DIContainer.resolve<Service>(Service);

const eventSink: EventSink.EventSource = DIContainer.resolve<IEventSink.IEventSource>(EventSink.EventSource);


export const createContactTracing: RequestHandler = (req, res, next) => {

  let event = plainToClass(IEventSink.eventData, req.body as IEventSink.eventData);
  eventSink.recordEvent(event);
  res.status(201).json({ message: 'Created the event.'});

};

export const getContactTracing: RequestHandler = (req, res, next) => {
  console.log(service.getAllNames());
};

export const updateContactTracing: RequestHandler<{ id: string }> = (req, res, next) => {
  const eventID = req.params.id;

  const updatedText = (req.body as { text: string }).text;

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