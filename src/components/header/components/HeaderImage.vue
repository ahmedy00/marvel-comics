<template>
  <div class="header-image mt-4">
    <img style="width: 95vw; border-radius: 12px" src="https://pbs.twimg.com/media/CQRG7KvUwAAKmc2.jpg" alt="marvel-heroes">
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.header-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}



</style>