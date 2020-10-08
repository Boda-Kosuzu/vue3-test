<template>
<div>
  <table>
    <tr>
      <th>
        TODO
      </th>
      <td>
        <input type="text" v-model="state.name">
      </td>
    </tr>
    <tr>
      <th>
        期限
      </th>
      <td>
        <input type="date" v-model="state.limit">
      </td>
    </tr>
    <tr>
      <th>
        完了
      </th>
      <td>
        <input type="checkbox" v-model="state.state">
      </td>
    </tr>
    <tr>
      <th>
        優先度
      </th>
      <td>
        <input type="number" v-model="state.priority">
      </td>
    </tr>
  </table>
  <button @click="updateTodo">
    更新
  </button>
</div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
} from 'vue'
import {
  useStore,
} from 'vuex';
import {
  useRouter,
  useRoute
} from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const selectedTodo = store.getters.getTodo(Number(route.params.id))
    store.commit('setTodo', selectedTodo)

    const state = reactive({
      name: computed({
        get: () => {
          return store.state.todo.name;
        },
        set: (name) => {
          store.commit('setTodoName', name);
        }
      }),
      limit: computed({
        get() {
          return store.state.todo.limit;
        },
        set(limit) {
          store.commit('setTodoLimit', limit);
        }
      }),
      state: computed({
        get() {
          return store.state.todo.state;
        },
        set(state) {
          store.commit('setTodoState', state);
        }
      }),
      priority: computed({
        get() {
          return store.state.todo.priority;
        },
        set(priority) {
          store.commit('setTodoPriority', priority);
        }
      }),
    })
    return {
      state,
      updateTodo() {
        store.commit('updateTodo');
        router.push({
          name: 'list',
        });
      }
    }
  },
});
</script>
