import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';

// login option 3 routing
// const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const Military = Loadable(lazy(() => import('views/utilities/military')));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/infrastructures/military',
      element: <Military />
    }
  ]
};

export default AuthenticationRoutes;
