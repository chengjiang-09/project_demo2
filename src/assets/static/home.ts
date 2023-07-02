import { TitleNav, TitleNavM, ListItem } from '@/store';
import { getAssetsFile } from '@/utils';

export const titleNav: TitleNav = [
  {
    navItem: {
      baseTitle: '明星榜单',
      outBodyActived: false,
      path: '/star',
    },
    itemDatas: { leftItems: [], rightItems: [] },
  },
  {
    navItem: {
      baseTitle: '护肤',
      outBodyActived: true,
    },
    itemDatas: {
      leftItems: [
        {
          title: {
            text: '商品',
            path: '',
          },
          datas: [
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
          ],
        },
        {
          title: {
            text: '商品',
            path: '',
          },
          datas: [
            {
              text: '商品',
              path: '/classify/2',
            },
            {
              text: '商品',
              path: '/classify/2',
            },
            {
              text: '商品',
              path: '/classify/2',
            },
            {
              text: '商品',
              path: '/classify/2',
            },
            {
              text: '商品',
              path: '/classify/2',
            },
            {
              text: '商品',
              path: '/classify/2',
            },
          ],
        },
      ],
      rightItems: [
        {
          path: '',
          imgPath: getAssetsFile('2021041613334312.png'),
        },
        {
          path: '',
          imgPath: getAssetsFile('2021041613334312.png'),
        },
      ],
    },
  },
  {
    navItem: {
      baseTitle: '面膜',
      outBodyActived: true,
    },
    itemDatas: {
      leftItems: [
        {
          title: {
            text: '商品',
            path: '',
          },
          datas: [
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
          ],
        },
        {
          title: {
            text: '商品',
            path: '',
          },
          datas: [
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
          ],
        },
      ],
      rightItems: [
        {
          path: '',
          imgPath: getAssetsFile('2021041613334312.png'),
        },
        {
          path: '',
          imgPath: getAssetsFile('2021041613334312.png'),
        },
      ],
    },
  },
  {
    navItem: {
      baseTitle: '彩妆',
      outBodyActived: true,
    },
    itemDatas: {
      leftItems: [
        {
          title: {
            text: '商品',
            path: '',
          },
          datas: [
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
          ],
        },
        {
          title: {
            text: '商品',
            path: '',
          },
          datas: [
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
            {
              text: '商品',
              path: '/classify/1',
            },
          ],
        },
      ],
      rightItems: [
        {
          path: '',
          imgPath: getAssetsFile('2021041613334312.png'),
        },
        {
          path: '',
          imgPath: getAssetsFile('2021041613334312.png'),
        },
      ],
    },
  },
  {
    navItem: {
      baseTitle: '洗护',
      outBodyActived: false,
      path: 'washCare',
    },
    itemDatas: {
      leftItems: [],
      rightItems: [],
    },
  },
  {
    navItem: {
      baseTitle: '品牌介绍',
      outBodyActived: false,
      path: '/brand',
    },
    itemDatas: {
      leftItems: [],
      rightItems: [],
    },
  },
];

export const titleNavM: TitleNavM = [
  {
    navItem: {
      id: '1',
      title: '主页',
      path: './',
    },
  },
  {
    navItem: {
      id: '2',
      title: '明星榜单',
      path: './',
    },
  },
  {
    navItem: {
      id: '3',
      title: '护肤',
      detils: [
        {
          title: '护肤品2',
          path: './',
        },
        {
          title: '护肤品2',
          path: './',
        },
      ],
    },
  },
  {
    navItem: {
      id: '',
      title: '护肤2',
      detils: [
        {
          title: '护肤品2',
          path: './',
        },
        {
          title: '护肤品2',
          path: './',
        },
      ],
    },
  },
  {
    navItem: {
      id: '',
      title: '护肤3',
      detils: [
        {
          title: '护肤品2',
          path: './',
        },
        {
          title: '护肤品2',
          path: './',
        },
      ],
    },
  },
  {
    navItem: {
      id: '',
      title: '护肤4',
      detils: [
        {
          title: '护肤品2',
          path: './',
        },
        {
          title: '护肤品2',
          path: './',
        },
      ],
    },
  },
  {
    navItem: {
      id: '',
      title: '护肤5',
      detils: [
        {
          title: '护肤品2',
          path: './',
        },
        {
          title: '护肤品2',
          path: './',
        },
      ],
    },
  },
];

export const listItem: ListItem = [
  {
    path: '',
    imgPath: getAssetsFile('20210429183308766.png'),
    content: '珀莱雅轻享阳光倍护养肤物理防晒液',
  },
  {
    path: '',
    imgPath: getAssetsFile('20210429183308766.png'),
    content: '珀莱雅轻享阳光倍护养肤物理防晒液',
  },
  {
    path: '',
    imgPath: getAssetsFile('20210429183308766.png'),
    content: '珀莱雅轻享阳光倍护养肤物理防晒液',
  },
  {
    path: '',
    imgPath: getAssetsFile('20210429183308766.png'),
    content: '珀莱雅轻享阳光倍护养肤物理防晒液',
  },
  {
    path: '',
    imgPath: getAssetsFile('20210429183308766.png'),
    content: '珀莱雅轻享阳光倍护养肤物理防晒液',
  },
];

export const carousel: Array<string> = [
  getAssetsFile('project/20210401130851145.jpeg'),
  getAssetsFile('project/20221228155745342.jpg'),
  getAssetsFile('project/20210401130851145.jpeg'),
  getAssetsFile('project/20221228155745342.jpg'),
  getAssetsFile('project/20210401130851145.jpeg'),
  getAssetsFile('project/20221228155745342.jpg'),
];

export const carouselM: Array<string> = [
  getAssetsFile('project/2022022513195237.jpg'),
  getAssetsFile('project/20220114164803837.jpg'),
  getAssetsFile('project/2022022513195237.jpg'),
  getAssetsFile('project/20220114164803837.jpg'),
  getAssetsFile('project/2022022513195237.jpg'),
  getAssetsFile('project/20220114164803837.jpg'),
];
