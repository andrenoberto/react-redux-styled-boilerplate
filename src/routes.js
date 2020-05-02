import { lazy } from 'react';

export const routes = [
  {
    component: lazy(() => import('pages/Home/Home')),
    exact: true,
    key: 'home',
    path: '/',
  }
];
