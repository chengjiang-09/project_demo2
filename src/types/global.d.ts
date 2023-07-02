import CommonNavItem from '@/components/common/commonNavItem/index.vue';
import CommonNavItemDetil from '@/components/common/commonNavItemDetil/index.vue';
import ExpansionBar from '@/components/common/expansionBar/index.vue';
import EjectCard from '@/components/common/ejectCard/index.vue';
import DemoSearch from '@/components/common/demoSearch/index.vue';
import RotationChart from '@/components/common/rotationChart/index.vue';
import ProductDisplay from '@/components/common/productDisplay/index.vue';

import CommonButton from '@/components/common/components/commonButton/index.vue';

import FloatFish from '@/components/animation/floatFish/index.vue';
import BorderRotate from '@/components/animation/borderRotate/index.vue';
import OpenStar from '@/components/animation/openStar/index.vue'

const components = {
  CommonNavItem: CommonNavItem,
  CommonNavItemDetil: CommonNavItemDetil,
  ExpansionBar: ExpansionBar,
  EjectCard: EjectCard,
  DemoSearch: DemoSearch,
  RotationChart: RotationChart,
  ProductDisplay: ProductDisplay,
  CommonButton: CommonButton,
};

const animationComponents = {
  FloatFish: FloatFish,
  BorderRotate: BorderRotate,
  OpenStar: OpenStar,
};

type Components = typeof components;
type AnimationComponents = typeof animationComponents;

declare module 'vue' {
  interface GlobalComponents extends Components, AnimationComponents {}
}
