<template>
  <div class="comics-wrapper">
    <HeaderImage/>
    <CardBase/>
  </div>
</template>

<script setup lang="ts">
import CardBase from '@/components/comics/components/CardBase.vue'
import HeaderImage from '@/components/header/components/HeaderImage.vue'
import axios from 'axios'
import { config, generateHash } from '@/config/config'
import { useStore } from 'vuex'
import { onBeforeMount } from 'vue'

const store = useStore()

onBeforeMount(() => {
  axios.get(`${config.baseURL}/comics`, {
    params: {
      apikey: config.publicKey,
      ts: Date.now(),
      hash: generateHash(Date.now(), config.privateKey, config.publicKey)
    }
  }).then(response => {
    store.commit('setComicsList', response.data.data.results)
  }).catch(error => {
    console.error('error', error)
  })
})

</script>

<style scoped>

.comics-wrapper {
  width: 95vw;
  padding: 2rem;
}

</style>