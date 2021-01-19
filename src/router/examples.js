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
    path: '/examples/toggleButton',
    name: 'toggleButtonPage',
    component: () => import('@/views/examples/toggleButtonPage.vue'),
    meta: {
      title: 'toggleButton演示'
    }
  }
]

export default examples