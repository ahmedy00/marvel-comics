import { createStore } from 'vuex'
import createPersistedState from 'vuex-plugin-persistedstate'

const store = createStore({
    plugins: [createPersistedState()],
    state: {
        // FIXME: Need better type declaration
        comicsList: [] as any,
        favouriteComics: [] as string[]
    },
    mutations: {
        // FIXME: Need better type declaration
        setComicsList (state, list: any) {
            state.comicsList = list
        },
        addToFavouriteComic (state, comicId: string) {
            state.favouriteComics.push(comicId)
        },
        removeFromFavourites (state, comicId: string) {
            const index = state.favouriteComics.indexOf(comicId)
            if (index > -1) {
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