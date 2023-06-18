<template>
  <div class="header-home d-flex align-center justify-center flex-row">
    <RouterLink :to="{name: 'Home'}">
      <div class="image ml-4">
        <img style="margin-left: 0" width="100" height="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="marvel-logo"/>
      </div>
    </RouterLink>
    <div class="routes d-flex flex-row ml-4">
      <RouterLink :to="{name: 'Comics'}">
        <div class="font mr-4">Comics</div>
      </RouterLink>
      <RouterLink :to="{name: 'Favourites'}">
        <div class="font ml-4 d-flex flex-row">
          <span>Favourites</span>
          <i class="favourite-icon fa fa-heart ml-2 mt-1" aria-hidden="true"></i>
          <span class="badge">{{ favouritesLength }}</span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, ComputedRef } from 'vue'

const store = useStore()

const favouritesLength: ComputedRef<number> = computed(() => {
  return store.getters.getFavouriteComics.length || 0
})

</script>

<style scoped>

.header-home {
  width: 35vw;
  height: 100%;
}

.image {
  width: 30%;
}

.favourite-icon {
  color: #FFA500;
  z-index: 2;
}

.badge {
  background-color: #EC1D24;
  color: white;
  padding: 0 5px;
  text-align: center;
  position: absolute;
  left: 20vw;
  top: 25px;
  z-index: 1;
  font: 700 1.1rem RobotoCondensed Bold,Trebuchet MS,Helvetica,Arial,sans-serif;
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