<template>
  <div class="header-home d-flex align-center justify-center flex-row">
    <div class="image ml-4">
      <img style="margin-left: 0" width="100" height="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="marvel-logo"/>
    </div>
    <div class="routes d-flex flex-row">
      <div class="font mr-4">Comics</div>
      <div class="font ml-4">Favourites</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.header-home {
  width: 35vw;
  height: 100%;
}

.image {
  width: 30%;
}

.routes {
  width: 70%;
}

.font {
  color: white;
  font: 400 1.2rem RobotoCondensed Bold,Trebuchet MS,Helvetica,Arial,sans-serif;
}

@media only screen and (max-width: 992px) {
  .header-home {
    width: 30vw;
    height: 100%;
  }

  .image {
    display: none !important;
  }

  .font {
  color: white;
  font: 400 .7rem RobotoCondensed Bold,Trebuchet MS,Helvetica,Arial,sans-serif;
}
}
</style>