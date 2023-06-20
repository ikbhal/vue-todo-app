<template>
  <div>
    <h1>Todo App</h1>
    <input type="text" v-model="newTodo" @keydown.enter="addTodo" placeholder="Add a new todo" />
    <ul>
      <li v-for="todo in todos" :key="todo" @click="removeTodo(todo)">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['todos']),
  },
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    ...mapMutations(['addTodo', 'removeTodo']),
  },
};
</script>
