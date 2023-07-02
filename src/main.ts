import { createApp } from 'vue';
import App from './App.vue';
import { setupAssets } from './plugins';
import { setupRouter } from './router';
import { setupCommonComponents, setupAnimationComponents, setupCommonChildrenComponents } from './components';
import { setupStore } from './store';

async function setupApp() {
  //引入静态配置
  setupAssets();

  const app = createApp(App);

  //注册路由
  setupRouter(app);

  //注册store
  setupStore(app);

  //全局引入公用组件
  setupCommonComponents(app);

  //全局引入动画组件
  setupAnimationComponents(app);

  //全局引入公用组件子组件
  setupCommonChildrenComponents(app)

  app.mount('#app');
}

setupApp();
