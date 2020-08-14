import App from './App.svelte';
import { MicroFrontends } from 'smf-tools';

const app = new App({
	target: document.getElementById(MicroFrontends['smf-gallery'].target) || document.body,
});

export default app;
