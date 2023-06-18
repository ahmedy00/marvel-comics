<template>
  <div class="card pa-2" :style="{height: `${cardMaxHeight}px`, width: `${cardMaxWidth}px`}">
    <div v-if="isCreatorVisible" class="favourite">
      <button class="favourite-button" @click="addToFavourites">
        <i :style="{color: isAddedFavourite ? '#FFA500' : 'white', fontSize: '20px'}" class="fa fa-heart" aria-hidden="true"></i>
      </button>
    </div>
    <div class="d-flex align-center justify-center">
      <img :src="imageSource" alt="" :width="imageWidth || 200" :height="imageWidth || 200">
    </div>
    <div class="name-font pt-4">
      <span>{{ comic.title }}</span>
    </div>
    <div class="description-font pt-4 pl-4 pr-4">
      <span style="overflow: hidden; text-overflow: ellipsis;">{{ description }}</span>
    </div>
    <div class="creator mr-0 mt-2">
      <div v-if="!!creators?.length && isCreatorVisible" class="d-flex flex-column">
        <span class="text-center mb-1 pr-1 pl-1">Created by </span>
        <ul>
          <li v-for="(creator, index) in creators" :key="index">
            {{ creator.name + ' (' + creator.role + ') ' }}
          </li>
        </ul>
      </div>
      <div class="text-center" v-if="!creators?.length && isCreatorVisible">Unknown Creator</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, Ref, ref} from 'vue'
import ItemsType from '@/types/comics/creators/items'
import store from '@/store'

const props = defineProps(['comic', 'imageWidth', 'isCreatorVisible', 'cardMaxWidth', 'cardMaxHeight'])

const imageSource: string = `${props.comic.thumbnail?.path}.${props.comic.thumbnail?.extension}`

const description: string = props.comic.description || 'No description available for this comic'

const creators: Ref<ItemsType[]> | undefined = ref(props.comic.creators?.items || [])

const isAddedFavourite = computed(() => {
  return store.getters.getFavouriteComics.some((favourite) => {
    return favourite.id === props.comic.id
  })
})

const addToFavourites = () => {
  // FIXME: There is an issue, after refreshing the page, the favorite list is not showing properly. Only includes the last selected favorite in the list
  if (!isAddedFavourite.value) {
    store.commit('addToFavouriteComic', props.comic)
  } else {
    store.commit('removeFromFavourites', props.comic.id)
  }
}



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

.favourite {
  float: right;
  position: absolute;
  display: inline-block;
}

.favourite-button {
  border: none;
  background: transparent;
  cursor: pointer;
}

.name-font {
  text-align: center;
  color: #f2f2f2;
  height: 80px;
  font: 800 22px/1 "RobotoCondensed","Trebuchet MS",Helvetica,Arial,sans-serif;
}

.description-font {
  color: #f2f2f2;
  height: 170px;
  overflow: hidden;
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