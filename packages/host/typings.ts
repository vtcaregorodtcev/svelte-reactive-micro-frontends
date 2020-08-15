import type { EventBus } from "smf-tools";

export { }

declare global {
  const process: {
    env: {
      NODE_ENV: string
    }
  }

  interface Window {
    Bus: EventBus
  }
}
