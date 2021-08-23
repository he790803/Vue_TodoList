import Vue from 'vue'
import Vuex from 'vuex'
import LocalStorage from '../modules/localStorage'
Vue.use(Vuex)

const STORE = new LocalStorage('todo-vue')

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    SET_TODOS (state, todos) {
      state.todos = todos
    }
  },
  // 呼叫mutations=>使用commit
  actions: {
    LOAD_TODOS ({ commit }) {
      // 1. load todos進來
      // window.localStorage.getItem('XXX')
      const todos = STORE.load()
      // 2. commit 呼叫mutations
      commit('SET_TODOS', todos)
      // 3. return
      return {
        todos
      }
    },
    CREATE_TODO ({ commit }) {

    },
    EIDE_TODO ({ commit }, { todos, tid }) {

    },
    DELETE_TODO ({ commit }, { tid }) {

    }
  },
  modules: {}
})
