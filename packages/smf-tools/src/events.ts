import { Handler, MOCK_Item } from "./typings"
import { getEventBus } from "./smf-tools"

export const EVENTS = {
  GALLERY: {
    CARD_SELECTED: "GALLERY:CARD_SELECTED"
  }
}

export const boilerplate = <T>(e: string) => ({
  then(h: Handler<T>): void {
    const Bus = getEventBus()

    Bus.on<T>(e, h)
  },

  fire(p?: T): void {
    const Bus = getEventBus();

    Bus.fire<T>(e, p)
  }
})

export const onGalleryCardSelected = boilerplate<MOCK_Item>(EVENTS.GALLERY.CARD_SELECTED)
