<template>
  <div class="header-search d-flex align-center justify-center">
    <input class="input" type="text">
  </div>
</template>

<script setup lang="ts">

</script>


<style scoped>

.header-search {
  width: 40vw;
  height: 100%;
}

.input {
  width: 25vw;
  height: 30px;
  border-radius: 5px;
  border: none;
}

@media only screen and (max-width: 600px) {
  .header-search {
    display: none;
  }
}
</style>