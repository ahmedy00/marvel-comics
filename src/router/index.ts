import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComicsBase from '@/components/comics/ComicsBase.vue'
import FavouritesBase from '@/components/favourites/FavouritesBase.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      redirect: 'comics',
      children: [
        {
          path: 'comics',
          name: 'Comics',
          component: ComicsBase
        },
        {
          path: 'favourites',
          name: 'Favourites',
          component: FavouritesBase
        }
      ]
    }
  ]
})

export default router
