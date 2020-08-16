<script lang="ts">
  import {
    loadMicroFrontend,
    MicroFrontends,
    onGalleryCardSelected,
  } from "smf-tools";
  import TopAppBar from "@smui/top-app-bar";
  import { Router, navigate, Route } from "svelte-routing";

  const galleryMicroFront = MicroFrontends["smf-gallery"][process.env.NODE_ENV];
  const restaurantMicroFront =
    MicroFrontends["smf-restaurant"][process.env.NODE_ENV];
  const checkoutMicroFront =
    MicroFrontends["smf-checkout"][process.env.NODE_ENV];

  onGalleryCardSelected.then((i) => navigate(`/restaurants?id=${i.id}`));
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

  .header-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .gallery {
    margin-top: 20px;
  }
</style>

<main>
  <Router>
    <TopAppBar
      class="container app-header"
      prominent={true}
      color="secondary"
      variant="static">
      <div class="header-line">
        <span>IndexПища</span>
        <span>
          {@html loadMicroFrontend(checkoutMicroFront)}
        </span>
      </div>
    </TopAppBar>
    <div class="container">
      <Route path="/">
        <div class="gallery">
          {@html loadMicroFrontend(galleryMicroFront)}
        </div>
      </Route>
      <Route path="/restaurants">
        {@html loadMicroFrontend(restaurantMicroFront)}
      </Route>
    </div>
  </Router>
</main>
