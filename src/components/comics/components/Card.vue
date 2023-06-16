<template>
  <div class="card pa-2">
    <div class="d-flex align-center justify-center">
      <img :src="imageSource" alt="" :width="200" :height="200">
    </div>
    <div class="name-font pt-4">
      <span>{{ comic.title }}</span>
    </div>
    <div class="description-font pt-4 pl-4 pr-4">
      <span>{{ description }}</span>
    </div>
    <div class="creator mr-0">
      <div v-if="creators.length" class="d-flex flex-column">
        <span class="text-center mb-1 pr-1 pl-1">Created by </span>
        <ul>
          <li v-for="(creator, index) in creators" :key="index">
            {{ creator.name + ' (' + creator.role + ') ' }}
          </li>
        </ul>
      </div>
      <div class="text-center" v-else>Unknown Creator</div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps(['comic'])
console.log('props', props.comic.creators.items)

const imageSource: string = props.comic.thumbnail.path + '.' + props.comic.thumbnail.extension

const description: string = props.comic.description || 'No description available for this comic'

const creators: string = props.comic.creators?.items

</script>

<style scoped>

.card {
  background: #202020;
  height: 650px;
  border-radius: 7px;
  box-shadow: 2px 4px 10px rgba(8,10,29,0.88);
}

.card img {
  border-radius: 50%;
  border: 5px solid #EC1D24;
}

.name-font {
  text-align: center;
  color: #f2f2f2;
  height: 70px;
  font: 800 22px/1 "RobotoCondensed","Trebuchet MS",Helvetica,Arial,sans-serif;
}

.description-font {
  color: #f2f2f2;
  height: 175px;
  font: 100 14px/1 "RobotoCondensed","Trebuchet MS",Helvetica,Arial,sans-serif;
}

.creator {
  float: right;
  color: #f2f2f2;
  font: 100 14px/1 "RobotoCondensed","Trebuchet MS",Helvetica,Arial,sans-serif
}

.text-center {
  text-align: center;
}

</style>