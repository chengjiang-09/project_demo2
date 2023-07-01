import { createApp } from 'vue';
import App from './App.vue';
import { setupAssets } from './plugins';
import { setupRouter } from './router'
import { setupCommonComponents } from './components'
import {setupStore } from './store'

async function setupApp() {

  //引入静态配置
  setupAssets();

  const app = createApp(App);

  //注册路由
  setupRouter(app)

  //注册store
  setupStore(app)

  //全局导入公用组件
  setupCommonComponents(app)

  app.mount('#app');
}

setupApp();
