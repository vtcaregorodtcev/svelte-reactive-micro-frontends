import { Handler, MOCK_Item, MOCK_Item_Restaurant } from "./typings"
import { getEventBus } from "./smf-tools"

export const EVENTS = {
  GALLERY: {
    CARD_SELECTED: "GALLERY:CARD_SELECTED"
  },
  RESTAURANT: {
    DISH_SELECTED: "RESTAURANT:DISH_SELECTED"
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
export const onRestaurantCardSelected = boilerplate<MOCK_Item_Restaurant>(EVENTS.RESTAURANT.DISH_SELECTED)
