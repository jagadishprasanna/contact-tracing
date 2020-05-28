"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactTracing = exports.getContactTracing = exports.createContactTracing = void 0;
require("reflect-metadata");
var service_1 = require(".././service");
var di_container_1 = __importDefault(require(".././di-container"));
var EventSource_1 = require("../Implementations/EventSource");
var IEventSource_1 = require("../Interfaces/IEventSource");
var class_transformer_1 = require("class-transformer");
var service = di_container_1.default.resolve(service_1.Service);
var eventSink = di_container_1.default.resolve(EventSource_1.EventSink.EventSource);
exports.createContactTracing = function (req, res, next) {
    var event = class_transformer_1.plainToClass(IEventSource_1.IEventSink.eventData, req.body);
    eventSink.recordEvent(event);
    res.status(201).json({ message: 'Created the event.' });
};
exports.getContactTracing = function (req, res, next) {
    console.log(service.getAllNames());
};
exports.updateContactTracing = function (req, res, next) {
    var eventID = req.params.id;
    var updatedText = req.body.text;
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
