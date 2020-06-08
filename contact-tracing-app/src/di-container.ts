import { Container } from "inversify";
import { DependencyA, DependencyB } from "./dependencies";
import { Named } from "./types";
import { IEventSink } from "./Interfaces/IEventSource";
import { EventSink } from "./Implementations/EventSource";
import {  IUser } from "./Interfaces/IUserRegister";
import {  User } from "./Implementations/UserRegister";

var DIContainer = new Container();
DIContainer.bind<Named>(DependencyA).toSelf();
DIContainer.bind<DependencyB>(DependencyB).toSelf();
DIContainer.bind<IEventSink.IEventSource>(EventSink.EventSource).toSelf();
DIContainer.bind<IUser.IUserRegister>(User.UserRegister).toSelf();
export default DIContainer;
