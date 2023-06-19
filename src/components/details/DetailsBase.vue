<template>
  <div class="detail-wrapper">
    <Detail :comic="comic"/>
  </div>
</template>

<script setup lang="ts">
import Detail from '@/components/details/components/Detail.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import type { ComicsType } from '@/types'
import { computed } from 'vue'

const route = useRoute()

const store = useStore()


const comic = computed(() => {
  return store.getters.getComicsList.find((comic: ComicsType) => {
    return comic.id.toString() === route.params.id
  })
})

</script>

<style scoped>

.detail-wrapper {
  position: absolute;
  top: 5.5rem;
  left: 0;
  width: 100%;
}

</style>