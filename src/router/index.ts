import type { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component:() => import('@/views/home/index.vue'),
    meta: {
      title: 'Root'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  next()
})

export async function setupRouter(app: App) {
    app.use(router);
    await router.isReady();
  }
  
export default router;