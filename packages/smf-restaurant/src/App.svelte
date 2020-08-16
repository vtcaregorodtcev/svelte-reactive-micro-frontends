<script>
  import { fetchRestaurant } from "./api";
  import Textfield from "@smui/textfield";
  import Select, { Option } from "@smui/select";
  import GalleryContent from "./components/GalleryContent.svelte";

  $: restaurantId = new URLSearchParams(location.search).get("id");
  $: restaurantPromise = fetchRestaurant(restaurantId, 20);
</script>

<style>
  .gallery,
  .image-bar {
    margin-top: 20px;
  }
  .image-bar {
    text-align: center;
  }
  .image-bar img {
    width: 1024px;
    height: 400px;
  }
</style>

<main>
  <div class="image-bar">
    <img
      src="https://eda.yandex/images/1370147/0e29190e0e10ceb1e7d445dafe502a2d-1100x825.jpg"
      alt="" />
  </div>
  <div class="gallery">
    <GalleryContent {restaurantPromise} />
  </div>
</main>
