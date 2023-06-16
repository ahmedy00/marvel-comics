<template>
  <div class="comics-wrapper">
    <CardBase/>
  </div>
</template>

<script setup lang="ts">
import CardBase from '@/components/comics/components/CardBase.vue'
import axios from 'axios'
import md5 from 'md5'
import { useStore } from 'vuex'
import { onBeforeMount } from 'vue'

const store = useStore()

const publicKey = '752836521b1549cc8a96031091242bac'
const privateKey = '1bf491dcde19ebf703fb09c746ca63e9e17685df'
const baseURL = 'https://gateway.marvel.com/v1/public'

onBeforeMount(() => {
  axios.get(`${baseURL}/characters`, {
    params: {
      apikey: publicKey,
      ts: Date.now(),
      hash: generateHash(Date.now(), privateKey, publicKey)
    }
  }).then(response => {
    store.commit('setComicsList', response.data.data.results)
  }).catch(error => {
    console.error('error', error)
  })
})
function generateHash(timestamp, privateKey, publicKey) {
  return md5(timestamp + privateKey + publicKey)
}

</script>

<style scoped>

.comics-wrapper {
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
}

</style>