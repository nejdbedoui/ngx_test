import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'smart table',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Smart Table',
    icon: 'archive-outline',
    children: [
      {
        title: 'Ads',
        link: '/pages/ad',
      },
      {
        title: 'Clients',
        link: '/pages/clients',
      },
      {
        title: 'Companies',
        link: '/pages/companies',
      },
      {
        title: 'Contracts',
        link: '/pages/contracts',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
