import CommonNavItem from '@/components/common/commonNavItem/index.vue';
import CommonNavItemDetil from '@/components/common/commonNavItemDetil/index.vue';
import ExpansionBar from '@/components/common/expansionBar/index.vue';
import EjectCard from '@/components/common/ejectCard/index.vue';
import DemoSearch from '@/components/common/demoSearch/index.vue';
import RotationChart from '@/components/common/rotationChart/index.vue';

const components = {
  CommonNavItem: CommonNavItem,
  CommonNavItemDetil: CommonNavItemDetil,
  ExpansionBar: ExpansionBar,
  EjectCard: EjectCard,
  DemoSearch: DemoSearch,
  RotationChart: RotationChart,
};

type Components = typeof components;

declare module 'vue' {
  interface GlobalComponents extends Components {}
}
