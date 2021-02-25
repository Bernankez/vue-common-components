const examples = [
  {
    path: '/examples/topBar',
    name: 'topBarPage',
    component: () => import('@/views/examples/topBarPage.vue'),
    meta: {
      title: 'topBar演示'
    }
  },
  {
    path: '/examples/switcher',
    name: 'switcherPage',
    component: () => import('@/views/examples/switcherPage.vue'),
    meta: {
      title: 'switcher演示'
    }
  },
  {
    path: '/examples/cyberButton',
    name: 'cyberButton',
    component: () => import('@/views/examples/cyberButtonPage.vue'),
    meta: {
      title: 'cyberButton演示'
    }
  }
]

export default examples