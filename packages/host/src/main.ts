import App from './App.svelte';
import { connectToEventBus } from 'smf-tools';

connectToEventBus()

const app = new App({
	target: document.body
});

export default app;
