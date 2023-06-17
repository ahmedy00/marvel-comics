<template>
  <div class="cards-wrapper">
    <div class="pa-2" v-for="(comic, index) in comics" :key="index">
      <Card :comic="comic" :is-creator-visible="true"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/comics/components/Card.vue'
import { useStore } from 'vuex'
import type { ComicsType } from '@/types'

const store = useStore()
const comics: ComicsType[] = store.getters.getComicsList

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