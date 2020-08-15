import { MicroFrontendManifest } from './typings';

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
