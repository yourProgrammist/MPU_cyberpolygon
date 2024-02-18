import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
// const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const Second = Loadable(lazy(() => import('views/utilities/health')));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes2 = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/infrastructures/health',
      element: <Second />
    }
  ]
};

export default AuthenticationRoutes2;
