import {
  App,
  Component,
  AsyncComponentLoader,
  defineAsyncComponent,
} from 'vue';
/**
 * 全局导入公用组件
 * @param app
 */
export function setupCommonChildrenComponents(app: App) {
  const modules = import.meta.glob('./**/*.vue');
  for (const path in modules) {
    const result = path.match(/.*\/(.+).vue$/);
    if (result) {
      const name = result[1] === 'index' ? result[0].split('/')[1] : result[1];
      const component = modules[path] as AsyncComponentLoader<Component>;
      app.component(name, defineAsyncComponent(component));
    }
  }
}
