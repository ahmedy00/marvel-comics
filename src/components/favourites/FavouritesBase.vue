<template>
  <div class="favourites-wrapper">
    <div class="pa-2" v-for="(favourite, index) in favourites" :key="index">
      <Card
        :comic="favourite"
        :image-width="100"
        :card-max-width="400"
        :card-max-height="500"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/comics/components/Card.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
import type { ComicsType } from '@/types'

const store = useStore()

const favourites: ComicsType[] = ref(store.getters.getFavouriteComics)

</script>

<style scoped>

.favourites-wrapper {
  display: grid;
  grid-template-columns: repeat(6, auto);
  position: absolute;
  top: 4rem;
  left: 0;
  padding: 2rem;
}

@media (max-width: 1200px) {
  .favourites-wrapper {
    grid-template-columns: auto auto auto;
  }
}

@media (max-width: 992px) {
  .favourites-wrapper {
    grid-template-columns: auto auto;
  }
}

@media (max-width: 768px) {
  .favourites-wrapper {
    grid-template-columns: auto;
  }
}

</style>