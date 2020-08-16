import App from './App.svelte';
import { MicroFrontends, connectToEventBus, attachLoggerToEventBus } from 'smf-tools';

connectToEventBus()
attachLoggerToEventBus((e, p) => console.log(e, p));

const app = new App({
	target: document.getElementById(MicroFrontends['smf-gallery'][process.env.NODE_ENV].target) || document.body,
});

export default app;
