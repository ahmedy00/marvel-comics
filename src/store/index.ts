import { createStore } from 'vuex'
import createPersistedState from 'vuex-plugin-persistedstate'
import type { ComicsType } from '@/types'

const store = createStore({
    plugins: [createPersistedState()],
    state: {
        comicsList: [] as ComicsType[],
        favouriteComics: [] as ComicsType[]
    },
    mutations: {
        setComicsList (state, list: ComicsType[]) {
            state.comicsList = list
        },
        addToFavouriteComic (state, comic: ComicsType) {
            state.favouriteComics.push(comic)
        },
        removeFromFavourites (state, comicId: string) {
            const index = state.favouriteComics.findIndex((favourite: ComicsType) => {
                return favourite.id === comicId
            })
            if (index !== -1) {
                state.favouriteComics.splice(index, 1)
            }
        }
    },
    getters: {
        getComicsList (state) {
            return state.comicsList
        },
        getFavouriteComics (state) {
            return state.favouriteComics
        }
    }
})

export default store