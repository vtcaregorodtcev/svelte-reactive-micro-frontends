<script lang="ts">
  import Card, { Content, Media, MediaContent } from "@smui/card";
  import type { MOCK_Item_Restaurant } from "smf-tools";
  import { onRestaurantCardSelected } from "smf-tools";

  export let restaurantPromise: Promise<
    MOCK_Item_Restaurant[]
  > = Promise.resolve([]);
</script>

<style>
  .gallery-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  .gallery-content-item {
    margin: 10px;
  }
  .card-image {
    width: 320px;
    height: 180px;
    cursor: pointer;
  }
</style>

{#await restaurantPromise}
  <p>...waiting for dishes</p>
{:then restaurants}
  <div class="gallery-content">
    {#each restaurants as r}
      <div class="gallery-content-item">
        <Card style="width: 320px;">
          <Media class="card-media-16x9" aspectRatio="16x9">
            <MediaContent>
              <img
                on:click={() => onRestaurantCardSelected.fire(r)}
                class="card-image"
                src={r.Picture}
                alt="" />
            </MediaContent>
          </Media>
          <Content style="color: #888;">{r.Name}</Content>
        </Card>
      </div>
    {/each}
  </div>
{:catch error}
  <p>An error occurred! {error}</p>
{/await}
