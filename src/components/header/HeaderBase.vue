<template>
  <header class="header-wrapper d-flex flex-row">
    <HeaderHome/>
    <HeaderSearch/>
    <HeaderAccount/>
  </header>
</template>

<script setup lang="ts">
import HeaderHome from '@/components/header/components/HeaderHome.vue'
import HeaderSearch from '@/components/header/components/HeaderSearch.vue'
import HeaderAccount from '@/components/header/components/HeaderAccount.vue'

</script>


<style scoped>

.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background: #EC1D24;
}

</style>