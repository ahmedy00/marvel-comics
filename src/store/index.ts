import { createStore } from 'vuex'
import createPersistedState from 'vuex-plugin-persistedstate'

const store = createStore({
    plugins: [createPersistedState()],
    state: {
        // FIXME: Need better type declaration
        comicsList: [] as any
    },
    mutations: {
        setComicsList (state, list) {
            state.comicsList = list
        }
    },
    getters: {
        getComicsList (state) {
            return state.comicsList
        }
    }
})

export default store