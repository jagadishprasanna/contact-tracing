"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactTracing = exports.getContactTracing = exports.createContactTracing = void 0;
var Events_1 = require("../models/Events");
var axios_1 = __importDefault(require("axios"));
require("reflect-metadata");
var service_1 = require(".././service");
var di_container_1 = __importDefault(require(".././di-container"));
var service = di_container_1.default.resolve(service_1.Service);
var CONTACT_TRACING = [];
var kafkaHost = 'localhost:9092';
exports.createContactTracing = function (req, res, next) {
    var text = req.body.text;
    var newEvent = new Events_1.Events(Math.random().toString(), text, new Date());
    CONTACT_TRACING.push(newEvent);
    var postEvent = function () {
        try {
            return axios_1.default.post('http://localhost:8088/ksql', {
                "ksql": "INSERT INTO riderLocations (profileId, latitude, longitude) VALUES ('c2309eec', 37.7877, -122.4205);",
                "streamsProperties": {}
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    var postEvents = function () { return __awaiter(void 0, void 0, void 0, function () {
        var event;
        return __generator(this, function (_a) {
            event = postEvent()
                .then(function (response) {
                console.log(response.data);
            })
                .catch(function (error) {
                console.log(error);
                throw error;
            });
            return [2 /*return*/];
        });
    }); };
    postEvents();
    res.status(201).json({ message: 'Created the todo.', createdTodo: newEvent });
};
exports.getContactTracing = function (req, res, next) {
    res.json({ todos: CONTACT_TRACING });
    console.log(service.getAllNames());
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
