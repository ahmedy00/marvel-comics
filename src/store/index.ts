import { createStore } from 'vuex'

const store = createStore({
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