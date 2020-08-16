<script>
  import { onRestaurantCardSelected } from "smf-tools";

  let checkout = {};

  onRestaurantCardSelected.then((x) => {
    if (checkout[x.id]) {
      delete checkout[x.id];
      checkout = { ...checkout };
    } else checkout[x.id] = x;
  });
</script>

<style>
  .count {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: rgb(51, 152, 230);
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
</style>

<main>
  <div class="count">{Object.keys(checkout).length}</div>
</main>
