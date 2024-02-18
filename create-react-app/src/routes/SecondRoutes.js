import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
// const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const Second = Loadable(lazy(() => import('views/utilities/second')));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes2 = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/infrastructures/second',
      element: <Second />
    }
  ]
};

export default AuthenticationRoutes2;
