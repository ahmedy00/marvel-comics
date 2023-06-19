<template>
  <header class="header-wrapper d-flex flex-row" :class="{ 'fade-out': isScrolling, 'fade-in': !isScrolling }" :style="{opacity: opacity}">
    <HeaderHome/>
    <HeaderSearch/>
    <HeaderAccount/>
  </header>
</template>

<script setup lang="ts">
import HeaderHome from '@/components/header/components/HeaderHome.vue'
import HeaderSearch from '@/components/header/components/HeaderSearch.vue'
import HeaderAccount from '@/components/header/components/HeaderAccount.vue'
import { onMounted, ref } from 'vue'

const opacity = ref(0)
const isScrolling = ref(false)

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
const handleScroll = () => {
  opacity.value = window.scrollY === 0 ? 0 : 1
  isScrolling.value = window.scrollY === 0
}

</script>


<style scoped>

.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5.5rem;
  background: #EC1D24;
  z-index: 999;
}

.fade-out {
  animation-name: fade-out;
  animation-duration: 0.3s;
}

.fade-in {
  animation-name: fade-in;
  animation-duration: 0.3s;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}



</style>