declare global {
  interface Window {
    Bus: EventBus
  }
}

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

export type MOCK_Item_Restaurant = { id: number, Name: string, Cost: string, Picture: string }

export type Handler<T> = (p?: T) => void
export type LoggerHandler<T> = (event: string, p?: T) => void
export type PredicateLoggerHandler<T> = (event: string, payload?: T) => boolean

export interface EventBus {
  logger?: LoggerHandler<any>
  handlers: Record<string, Handler<any>[]>

  on<T>(event: string, handler: Handler<T>): void;
  fire<T>(event: string, payload?: T): void;
  log?<T>(handler: LoggerHandler<T>, predicate?: PredicateLoggerHandler<T>): void;
}
