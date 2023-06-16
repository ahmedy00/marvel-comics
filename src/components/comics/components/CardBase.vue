<template>
  <div class="cards-wrapper">
    <div class="pa-4" v-for="(comic, index) in comics" :key="index">
      <Card :comic="comic"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/comics/components/Card.vue'
import { useStore } from 'vuex'

const store = useStore()
const comics = store.getters.getComicsList

</script>

<style scoped>

.cards-wrapper {
  display: grid;
  grid-template-columns: auto auto auto auto;
}

@media (max-width: 992px) {
  .cards-wrapper {
    grid-template-columns: auto auto;
  }
}

@media (max-width: 768px) {
  .cards-wrapper {
    grid-template-columns: auto;
  }
}

</style>