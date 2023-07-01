import { TitleNav, TitleNavM, ListItem } from '@/store';
import { getAssetsFile } from '@/utils';

export const titleNav: TitleNav = [
  {
    navItem: {
      baseTitle: '标题',
      outBodyActived: false,
    },
    itemDatas: { leftItems: [], rightItems: [] },
  },
  {
    navItem: {
      baseTitle: '标题',
      outBodyActived: true,
    },
    itemDatas: {
      leftItems: [
        {
          title: {
            text: '标题',
            path: '',
          },
          datas: [
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
          ],
        },
        {
          title: {
            text: '标题',
            path: '',
          },
          datas: [
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
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
      baseTitle: '标题',
      outBodyActived: true,
    },
    itemDatas: {
      leftItems: [
        {
          title: {
            text: '标题',
            path: '',
          },
          datas: [
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
          ],
        },
        {
          title: {
            text: '标题',
            path: '',
          },
          datas: [
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
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
      baseTitle: '标题',
      outBodyActived: true,
    },
    itemDatas: {
      leftItems: [
        {
          title: {
            text: '标题',
            path: '',
          },
          datas: [
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
          ],
        },
        {
          title: {
            text: '标题',
            path: '',
          },
          datas: [
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
            },
            {
              text: '标题',
              path: '',
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
      baseTitle: '标题',
      outBodyActived: false,
    },
    itemDatas: {
      leftItems: [],
      rightItems: [],
    },
  },
  {
    navItem: {
      baseTitle: '标题',
      outBodyActived: true,
    },
    itemDatas: {
      leftItems: [],
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
