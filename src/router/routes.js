
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/test',
    component: () => import('pages/test.vue')
  },
  {
    path: '/receipePage',
    component: () => import('pages/receipePage.vue')
  },
  {
    path: '/hello',
    component: () => import('pages/hello.vue')
  },
  {
    path: '/privacypolicy',
    component: () => import('pages/privacypolicy.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
