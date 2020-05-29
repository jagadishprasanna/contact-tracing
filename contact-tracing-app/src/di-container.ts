import { Container } from "inversify";
import { DependencyA, DependencyB } from "./dependencies";
import { Named } from "./types";
import { IEventSink } from "./Interfaces/IEventSource";
import { EventSink } from "./Implementations/EventSource";

var DIContainer = new Container();
DIContainer.bind<Named>(DependencyA).toSelf();
DIContainer.bind<DependencyB>(DependencyB).toSelf();
DIContainer.bind<IEventSink.IEventSource>(EventSink.EventSource).toSelf();

export default DIContainer;
