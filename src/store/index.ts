import { createStore } from 'vuex'
import { TodoData } from '../types/index';

const todo: TodoData = {
  id: 0,
  name: '',
  limit: '',
  state: false,
  priority: 0,
};
const list: TodoData[] = [];

export default createStore({
  state: {
    todo,
    list,
  },
  mutations: {
    setTodoName(state, name: string) {
      state.todo.name = name;
    },
    setTodoLimit(state, limit: string) {
      state.todo.limit = limit;
    },
    setTodoState(state, todoState: boolean) {
      state.todo.state = todoState;
    },
    setTodoPriority(state, priority: number) {
      state.todo.priority = priority;
    },
    setTodo(state, todoData: TodoData) {
      state.todo = { ...todoData };
    },
    addTodo(state) {
      state.list.push({...state.todo});
      state.todo.id =  state.list[state.list.length - 1].id + 1;
      state.todo.name = '';
      state.todo.limit = '';
      state.todo.state = false;
      state.todo.priority = 0;
    },
    updateTodo(state) {
      const target = state.list.find((data) => data.id === state.todo.id);

      if (!target) { return; }

      target.id = state.todo.id;
      target.name = state.todo.name;
      target.limit = state.todo.limit;
      target.state = state.todo.state;
      target.priority = state.todo.priority;

      state.todo.id =  state.list[state.list.length - 1].id + 1;
      state.todo.name = '';
      state.todo.limit = '';
      state.todo.state = false;
      state.todo.priority = 0;
    },
    deleteTodo(state, id) {
      const index = state.list.findIndex((data) => data.id === id);
      state.list.splice(index, 1);
    },
  },
  getters: {
    getTodo: (state) => (id: number) => {
      return state.list.find((data) => data.id === id);
    },
  },
})
