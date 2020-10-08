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
        優先度
      </th>
      <td>
        <input type="number" v-model="state.priority">
      </td>
    </tr>
  </table>
  <button @click="addTodo">
    登録
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
  useRouter
} from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
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
      addTodo() {
        store.commit('addTodo');
        router.push({
          name: 'list',
        });
      }
    }
  },
});
</script>
