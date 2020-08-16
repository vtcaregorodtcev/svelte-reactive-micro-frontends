import App from './App.svelte';
import { MicroFrontends, connectToEventBus } from 'smf-tools';

connectToEventBus();

const app = new App({
	target: document.getElementById(MicroFrontends['smf-checkout'][process.env.NODE_ENV].target) || document.body,
});

export default app;
