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

const noop = () => { }


export class Bus implements EventBus {
  constructor() {
    this.handlers = {};
    this.logger = noop
  }

  logger: LoggerHandler
  handlers: Record<string, Handler[]>;

  on(event: string, handler: Handler): void {
    if (this.handlers[event]) {
      this.handlers[event].push(handler);
    } else {
      this.handlers[event] = [handler];
    }
  }

  fire(event: string, payload?: Object): void {
    const handlers = this.handlers[event] || [];

    this.logger(event, payload);

    handlers.map(h => h(payload));
  }

  log(handler: LoggerHandler, predicate?: PredicateLoggerHandler): void {
    this.logger = (e: string, p?: Object) => predicate
      ? predicate(e, p)
        ? handler(e, p)
        : noop()
      : handler(e, p)
  }
}
