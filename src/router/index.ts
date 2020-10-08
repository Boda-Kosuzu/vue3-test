import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Create from '../views/Create.vue';
import List from '../views/List.vue';
import Update from '../views/Update.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'create',
    component: Create,
  },
  {
    path: '/list',
    name: 'list',
    component: List,
  },
  {
    path: '/update/:id',
    name: 'update',
    component: Update,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
