<script lang="ts">
  import {
    getStringEntryPoint,
    loadMicroFrontend,
    MicroFrontends,
    EVENTS,
  } from "smf-tools";

  import TopAppBar from "@smui/top-app-bar";
  import { onMount } from "svelte";

  const galleryMicroFront = MicroFrontends["smf-gallery"][process.env.NODE_ENV];

  onMount(async () => loadMicroFrontend(galleryMicroFront));

  window.Bus.on(EVENTS.GALLERY.CARD_SELECTED, () => alert("it`s working"));
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(.container) {
    padding: 0 10%;
  }

  :global(.app-header) {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 18px;
  }

  .gallery {
    margin-top: 20px;
  }
</style>

<main>
  <TopAppBar
    class="container app-header"
    prominent={true}
    color="secondary"
    variant="static">
    IndexПища
  </TopAppBar>
  <div class="container gallery">
    {@html getStringEntryPoint(galleryMicroFront)}
  </div>
</main>
