<template>
  <div>
    {{ comic }}
  </div>
</template>

<script setup lang="ts">

const props = defineProps(['comic'])

console.log('comic', props.comic)

</script>

<style scoped>

</style>