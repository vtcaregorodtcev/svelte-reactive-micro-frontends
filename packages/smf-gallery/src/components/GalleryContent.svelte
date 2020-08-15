<script lang="ts">
  import Card, { Content, Media, MediaContent } from "@smui/card";
  import type { MOCK_Item } from 'smf-tools';

  export let restaurantsPromise: Promise<MOCK_Item[]>;
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

{#await restaurantsPromise}
  <p>...waiting</p>
{:then restaurants}
  <div class="gallery-content">
    {#each restaurants as r}
      <div class="gallery-content-item">
        <Card style="width: 320px;">
          <Media class="card-media-16x9" aspectRatio="16x9">
            <MediaContent>
              <img class="card-image" src={r.Picture} alt="" />
            </MediaContent>
          </Media>
          <Content style="color: #888;">{r.Name}: {r.Rating} Звезд</Content>
        </Card>
      </div>
    {/each}
  </div>
{:catch error}
  <p>An error occurred! {error}</p>
{/await}
