import App from './App.svelte';
import { MicroFrontends, Bus } from 'smf-tools';

window.Bus = window.Bus || new Bus();

window.Bus.log((e, p) => console.log(e, p));

const app = new App({
	target: document.getElementById(MicroFrontends['smf-gallery'][process.env.NODE_ENV].target) || document.body,
});

export default app;
