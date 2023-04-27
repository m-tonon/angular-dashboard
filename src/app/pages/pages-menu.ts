import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'ADM',
    icon: 'people-outline',
    link: '/pages/dashboard',
    home: true,
    children: [
      {
        'title': 'List'
      },
      {
        'title': 'Create'
      }
    ]
  },

];
