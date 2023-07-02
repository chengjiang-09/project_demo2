import { defineStore } from 'pinia';
import {
  CommonNavItemProps,
  DetilProps,
  ExpansionBarProps,
} from '@/components/common/index';
import {
  titleNav,
  titleNavM,
  listItem,
  carousel,
  carouselM,
} from '@/assets/static/home';

interface Nav {
  active?: boolean;
  navItem: Partial<CommonNavItemProps>;
  itemDatas: Partial<DetilProps>;
}

interface NavM {
  active?: boolean;
  navItem: Partial<ExpansionBarProps>;
}

export type TitleNav = Array<Nav>;
export type TitleNavM = Array<NavM>;

interface Item {
  path?: string;
  imgPath: string;
  content: string;
}
export type ListItem = Array<Item>;

export interface HomeStore {
  targetView: string;
  titleNav: TitleNav;
  titleNavM: TitleNavM;
  listItem: ListItem;
  carousel: Array<string>;
  carouselM: Array<string>;
}

export const useHomeStore = defineStore('home-store', {
  state: (): HomeStore => ({
    targetView: '',
    titleNav: import.meta.env.VITE_STATIC_DATA === 'Y' ? titleNav : [],
    titleNavM: import.meta.env.VITE_STATIC_DATA === 'Y' ? titleNavM : [],
    listItem: import.meta.env.VITE_STATIC_DATA === 'Y' ? listItem : [],
    carousel: import.meta.env.VITE_STATIC_DATA === 'Y' ? carousel : [],
    carouselM: import.meta.env.VITE_STATIC_DATA === 'Y' ? carouselM : [],
  }),
  actions: {
    setTitleNav(titleNav: TitleNav) {
      this.titleNav = titleNav;
      this.titleNav.forEach((nav) => {
        if (nav.active === undefined) {
          nav.active = false;
        }
      });
    },
    setTitleNavM(titleNavM: TitleNavM) {
      this.titleNavM = titleNavM;
      this.titleNavM.forEach((nav) => {
        if (nav.active === undefined) {
          nav.active = false;
        }
      });
    },
    setListItem(listItem: ListItem) {
      this.listItem = listItem;
    },
    setCarousel(carousel: Array<string>) {
      this.carousel = carousel;
    },
    setCarouselM(carousel: Array<string>) {
      this.carouselM = carousel;
    },
    setTargetView(view: string = ''){
      this.targetView= view
      this.titleNav.forEach((nav) => {
        if (nav.navItem.path === view) {
          nav.active = true;
        }
      });
    }
  },
});
