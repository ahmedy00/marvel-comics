<template>
  <div class="favourites-wrapper d-flex align-center">
    <template v-if="!!favourites.length">
      <div class="pa-2 ma-a" v-for="(favourite, index) in favourites" :key="index">
        <Card
          :comic="favourite"
          :image-width="400"
          :card-max-width="500"
          :card-max-height="800"
        />
    </div>
    </template>
    <div class="warning mt-4" v-else>
      There is no comic in your favourite list.
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/comics/components/Card.vue'
import { useStore } from 'vuex'
import type { ComicsType } from '@/types'

const store = useStore()

const favourites: ComicsType[] = store.getters.getFavouriteComics

</script>

<style scoped>

.favourites-wrapper {
  display: grid;
  grid-template-columns: auto;
  margin-top: 4rem;
  width: 95vw;
  padding: 2rem;
}

.warning {
  width: 100vw;
  color: white;
  font: 400 1.1rem RobotoCondensed Bold,Trebuchet MS,Helvetica,Arial,sans-serif;
  text-align: center;
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