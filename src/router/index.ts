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
  },
  {
    name: 'star',
    path: '/star',
    component:() => import('@/views/starList/index.vue'),
    meta: {
      title: 'star'
    }
  },
  {
    name: 'classify',
    path: '/classify/:id',
    component:() => import('@/views/classify/index.vue'),
    meta: {
      title: 'classify'
    }
  },
  {
    name: 'brand',
    path: '/brand',
    component:() => import('@/views/brand/index.vue'),
    meta: {
      title: 'brand'
    }
  },
  {
    name: 'product',
    path: '/classify/:id/product/:pid',
    component:() => import('@/views/product/index.vue'),
    meta: {
      title: 'product'
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