<script>
  import { fetchRestaurants } from "./api";
  import Textfield from "@smui/textfield";
  import Select, { Option } from "@smui/select";
  import GalleryContent from "./components/GalleryContent.svelte";

  const ratings = [1, 2, 3, 4, 5];

  let searchTerm = "";
  let ratingChoise = 0;

  $: restaurantsPromise = fetchRestaurants(searchTerm, ratingChoise, 20);
</script>

<style>
  :global(.search-term, .rating-select) {
    width: 40%;
  }
  .search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .gallery {
    margin-top: 20px;
  }
</style>

<main>
  <div class="search-bar">
    <Textfield
      class="search-term"
      variant="outlined"
      bind:value={searchTerm}
      label="Начни искать пищу здесь"
      input$aria-controls="helper-text-outlined-a"
      input$aria-describedby="helper-text-outlined-a" />

    <Select class="rating-select" bind:value={ratingChoise} label="Рэйтинг">
      <Option value="" />
      {#each ratings as rating}
        <Option value={rating} selected={ratingChoise === rating}>
          {rating} Звезд
        </Option>
      {/each}
    </Select>
  </div>
  <div class="gallery">
    <GalleryContent {restaurantsPromise} />
  </div>
</main>
