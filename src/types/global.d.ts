import CommonNavItem from '@/components/common/commonNavItem/index.vue';

const components = {
  CommonNavItem: CommonNavItem,
};

type Components = typeof components;

declare module 'vue' {
  interface GlobalComponents extends Components {}
}
