/* eslint-disable indent */

const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'notifications/',
        component: () => import('pages/Notification.vue')
      },
      {
        path: 'report/:id',
        name: 'report',
        component: () => import('pages/Report.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
