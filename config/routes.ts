export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/article',
    name: 'article',
    icon: 'Wallet',
    routes: [
      {
        path: '/article',
        redirect: '/article/list',
      },
      // {
      //   path: '/article/publish',
      //   name: 'publish',
      //   component: './article/publish',
      // },
      {
        path: '/article/list',
        name: 'list',
        component: './article/list',
      },
    ],
  },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
