import App from './App.svelte';
import { MicroFrontends } from 'smf-tools';

const app = new App({
	target: document.getElementById(MicroFrontends['smf-gallery'][process.env.NODE_ENV].target) || document.body,
});

export default app;
