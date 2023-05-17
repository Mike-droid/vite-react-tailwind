export const routes = [
  {
    path: '/',
  },
  {
    path: '/my-account',
  },
  {
    path: '/my-order',
  },
  {
    path: '/my-orders/last',
  },
  {
    path: '/my-orders',
  },
  {
    path: '/my-orders/:id',
  },
  {
    path: '/sign-in',
  },
  {
    path: '/email',
  },
  {
    path: '/cart'
  }
];

export const menu1 = [
  {
    to: '/',
    text: 'Shopi',
    className: 'font-semibold text-lg'
  },
]

export const menu2 = [
  {
    to: '#',
    text: 'Made by miguelreyesmoreno@hotmail.com',
    className: 'text-black/60'
  },
  {
    to: '/my-orders',
    text: 'My orders',
    className: ''
  },
  {
    to: '/my-account',
    text: 'My account',
    className: ''
  },
  {
    to: '/sign-in',
    text: 'Sign in',
    className: ''
  },
  {
    to: '/cart',
    text: '🛒',
    className: ''
  },
]