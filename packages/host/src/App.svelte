<script lang="ts">
  import {
    getStringEntryPoint,
    loadMicroFrontend,
    MicroFrontends,
  } from "smf-tools";

  import { onMount } from "svelte";

  const galleryMicroFront = MicroFrontends["smf-gallery"];

  onMount(async () => loadMicroFrontend(galleryMicroFront));

  let a = 0;

  const setClick = () => a++;
</script>

<main>
  Here is the main content, below from microfronted
  <button on:click={setClick}>+ {a}</button>
  {@html getStringEntryPoint(galleryMicroFront)}
</main>
