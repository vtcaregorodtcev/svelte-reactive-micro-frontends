import { MicroFrontendManifest, EventBus, Handler, LoggerHandler, PredicateLoggerHandler } from './typings';

export * from './events';
export * from './typings';
export * from './microfrontends';

export const getStringEntryPoint = (microfrontend: MicroFrontendManifest): string => {
  return `<div id=${microfrontend.target}></div>`
}

export function loadMicroFrontend(microfrontend: MicroFrontendManifest): void {
  const link = document.createElement("link");

  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = microfrontend.cssassets;

  const script = document.createElement("script");

  script.setAttribute("src", microfrontend.jsassets);

  document.head.appendChild(link);
  document.head.appendChild(script);
}

export const noop = () => { }


export class Bus implements EventBus {
  constructor() {
    this.handlers = {};
    this.logger = noop
  }

  logger: LoggerHandler<any>
  handlers: Record<string, Handler<any>[]>;

  on<T>(event: string, handler: Handler<T>): void {
    if (this.handlers[event]) {
      this.handlers[event].push(handler);
    } else {
      this.handlers[event] = [handler];
    }
  }

  fire<T>(event: string, payload?: T): void {
    const handlers = this.handlers[event] || [];

    this.logger(event, payload);

    handlers.map(h => (h as Handler<T>)(payload));
  }

  log<T>(handler: LoggerHandler<T>, predicate?: PredicateLoggerHandler<T>): void {
    this.logger = (e: string, p?: T) => predicate
      ? predicate(e, p)
        ? handler(e, p)
        : noop()
      : handler(e, p)
  }
}

export const connectToEventBus = () => {
  window.Bus = window.Bus || new Bus();
}

export const getEventBus = () => window.Bus;

export const attachLoggerToEventBus = (handler: LoggerHandler<any>, predicate?: PredicateLoggerHandler<any>) => window.Bus && window.Bus.log && window.Bus.log(handler, predicate);
