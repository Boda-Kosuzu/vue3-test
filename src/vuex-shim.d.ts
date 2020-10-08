import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { TodoData } from './types'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    todo: TodoData;
    list: Array<TodoData>;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}