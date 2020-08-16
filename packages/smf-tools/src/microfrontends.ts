import { MicroFrontendManifestConfig } from "./typings";

export const MicroFrontends: Record<string, MicroFrontendManifestConfig> = {
  "smf-gallery": {
    "production": {
      "name": "Gallery Microftontend",
      "target": "smf-gallery",
      "cssassets": "https://smf-gallery.web.app/bundle.css",
      "jsassets": "https://smf-gallery.web.app/bundle.js"
    },
    "development": {
      "name": "Gallery Microftontend",
      "target": "smf-gallery",
      "cssassets": "http://127.0.0.1:5555/build/bundle.css",
      "jsassets": "http://127.0.0.1:5555/build/bundle.js"
    }
  },
  "smf-restaurant": {
    "production": {
      "name": "Restaurant Microftontend",
      "target": "smf-restuarant",
      "cssassets": "-",
      "jsassets": "-"
    },
    "development": {
      "name": "Restaurant Microftontend",
      "target": "smf-restuarant",
      "cssassets": "http://127.0.0.1:7000/build/bundle.css",
      "jsassets": "http://127.0.0.1:7000/build/bundle.js"
    }
  }
}
