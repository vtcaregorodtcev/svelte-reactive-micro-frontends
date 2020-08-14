import { MicroFrontendManifest } from "./typings";

export const MicroFrontends: Record<string, MicroFrontendManifest> = {
  "smf-gallery": {
    "name": "Gallery Microftontend",
    "target": "smf-gallery",
    "cssassets": "https://smf-gallery.web.app/bundle.css",
    "jsassets": "https://smf-gallery.web.app/bundle.js"
  }
}
