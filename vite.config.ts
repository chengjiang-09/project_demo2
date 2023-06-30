import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import path from 'path';

export default defineConfig((configEnv) => {
  return {
    resolve: {
      //设置别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [vue(), DefineOptions()],
    server: {
      host: '0.0.0.0',
      port: 3200,
      open: true,
    },
  };
});
