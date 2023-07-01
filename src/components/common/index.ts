import {
  App,
  Component,
  AsyncComponentLoader,
  defineAsyncComponent,
} from 'vue';
import type { PropType, ExtractPropTypes } from 'vue';
/**
 * 全局导入公用组件
 * @param app
 */
export function setupCommonComponents(app: App) {
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

type Text = string | number | symbol;

//detilProps
//detil组件左侧盒子
interface Title {
  text: Text;
  path: string;
}
interface LeftData extends Title {}
interface LeftItems {
  title: Title;
  datas: Array<LeftData>;
}
//detil组件右侧盒子
interface RightData {
  imgPath: string;
  path: string;
}
export const detilProps = {
  leftItems: {
    type: Array as PropType<Array<LeftItems> | undefined>,
    require: false,
    default: [],
  },
  rightItems: {
    type: Array as PropType<Array<RightData> | undefined>,
    require: false,
    default: [],
  },
};
export type DetilProps = ExtractPropTypes<typeof detilProps>;

//commonNavItemProps
type Active = Boolean | String | undefined;
export const commonNavItemProps = {
  baseTitle: {
    type: String as PropType<Text>,
    require: false,
    default: '标题',
  },
  path: {
    type: String as PropType<string>,
    require: false,
    default: '/',
  },
  actived: {
    type: Boolean as PropType<Active>,
    require: false,
    default: undefined,
  },
  titleActived: {
    type: Boolean as PropType<Active>,
    require: false,
    default: undefined,
  },
  decorateActived: {
    type: Boolean as PropType<Active>,
    require: false,
    default: undefined,
  },
  outBodyActived: {
    type: Boolean as PropType<Active>,
    require: false,
    default: undefined,
  },
};
export type CommonNavItemProps = ExtractPropTypes<typeof commonNavItemProps>;

//expansionBarProps
interface ExpansionBarDetil {
  title: Text;
  path: string;
}
export const expansionBarProps = {
  title: {
    type: String as PropType<Text>,
    require: false,
    default: '标题',
  },
  fontSizeMain: {
    type: String as PropType<string | number>,
    require: false,
    default: '34',
  },
  fontSizeDetil: {
    type: String as PropType<string | number>,
    require: false,
    default: '28',
  },
  height: {
    type: String as PropType<string | number>,
    require: false,
    default: '110',
  },
  action: {
    type: Boolean as PropType<Active>,
    require: false,
    default: false,
  },
  path: {
    type: String as PropType<string | undefined>,
    require: false,
    default: undefined,
  },
  detils: {
    type: Array as PropType<Array<ExpansionBarDetil>>,
    require: false,
    default: [],
  },
  id: {
    type: String as PropType<string | number>,
    require: false,
    default: '',
  }
};
export type ExpansionBarProps = ExtractPropTypes<typeof expansionBarProps>;
