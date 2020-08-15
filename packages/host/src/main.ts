import App from './App.svelte';
import { Bus } from 'smf-tools';

window.Bus = window.Bus || new Bus();

const app = new App({
	target: document.body
});

export default app;
