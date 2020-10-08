<template>
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>ステータス</th>
      <th>TODO</th>
      <th>期限</th>
      <th>優先度</th>
    </tr>
  </thead>
  <tbody>
    <list-item v-for="item in list" :key="item.id" :item="item" />
  </tbody>
</table>
<router-link :to="{name: 'create'}">新規作成</router-link>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
} from 'vue'
import {
  useStore,
} from 'vuex';
import ListItem from './ListItem.vue';

export default defineComponent({
  components: {
    ListItem,
  },
  setup() {
    const store = useStore();
    const list = computed(() => store.state.list)

    return {
      list
    }
  }
});
</script>
