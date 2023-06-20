import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, todo) {
      const index = state.todos.indexOf(todo);
      if (index > -1) {
        state.todos.splice(index, 1);
      }
    },
  },
  plugins: [createPersistedState()],
});
