<script>
  let a = 0;

  const setClick = () => a++;
</script>

<main>
  Here is the gallery micro frontend
  <button on:click={setClick}>+ {a}</button>
</main>
