<template>
<tr>
  <td>
    {{item.id}}
  </td>
  <td>
    {{state}}
  </td>
  <td>
    <router-link :to="{name: 'update', params: {id: item.id}}">
      {{item.name}}
    </router-link>
  </td>
  <td>
    {{item.limit}}
  </td>
  <td>
    {{item.priority}}
  </td>
  <td>
    <button @click="deleteTodoItem">削除</button>
  </td>
</tr>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
} from 'vue'
import {
  useStore,
} from 'vuex';
import {
  TodoData,
} from '../types';

export default defineComponent({
  props: {
    item: {
      type: Object as PropType < TodoData > ,
      required: true,
    }
  },
  setup(props) {
    const store = useStore();
    const todoItem = computed(() => props.item);
    const state = computed(() => props?.item.state ? '完了' : '未完了')
    const deleteTodoItem = () => {
      store.commit('deleteTodo', props.item.id);
    }

    return {
      todoItem,
      state,
      deleteTodoItem
    }
  }
});
</script>
