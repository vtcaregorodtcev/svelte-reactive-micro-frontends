export type MicroFrontendManifestConfig = Record<string, MicroFrontendManifest>

export type MicroFrontendManifest = {
  name: string;
  target: string;
  cssassets: string;
  jsassets: string;
}

export type MOCK_Item = {
  id: number;
  Name: string;
  Rating: number;
  Delivery: boolean;
  Cost: number;
  Location: string;
  Picture: string;
}

export type Handler = (p?: Object) => void
export type LoggerHandler = (event: string, p?: Object) => void
export type PredicateLoggerHandler = (event: string, payload?: Object) => boolean

export interface EventBus {
  logger?: LoggerHandler
  handlers: Record<string, Handler[]>

  on(event: string, handler: Handler): void;
  fire(event: string, payload?: Object): void;
  log?(handler: LoggerHandler, predicate?: PredicateLoggerHandler): void;
}
