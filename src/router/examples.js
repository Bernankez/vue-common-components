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
    path: '/examples/skeleton',
    name: 'skeletonPage',
    component: () => import('@/views/examples/skeletonPage.vue'),
    meta: {
      title: 'skeleton演示'
    }
  }
]

export default examples