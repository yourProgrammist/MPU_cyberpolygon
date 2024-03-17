import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';

// login option 3 routing
// const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const Aerospace = Loadable(lazy(() => import('views/utilities/aerospace')));
const Banking = Loadable(lazy(() => import('views/utilities/banking')));
const Chemistry = Loadable(lazy(() => import('views/utilities/chemistry')));
const Communication = Loadable(lazy(() => import('views/utilities/communication')));
const Energy = Loadable(lazy(() => import('views/utilities/energy')));
const Fuel = Loadable(lazy(() => import('views/utilities/fuel')));
const Government = Loadable(lazy(() => import('views/utilities/government')));
const Metallurgy = Loadable(lazy(() => import('views/utilities/metallurgy')));
const Mining = Loadable(lazy(() => import('views/utilities/mining')));
const Nuclear = Loadable(lazy(() => import('views/utilities/nuclear')));
const Transport = Loadable(lazy(() => import('views/utilities/transport')));
const Markdown = Loadable(lazy(() => import('views/utilities/markdown')));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const InfrastructureRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/infrastructures/aerospace',
      element: <Aerospace />
    },
    {
      path: '/infrastructures/banking',
      element: <Banking />
    },
    {
      path: '/infrastructures/chemistry',
      element: <Chemistry />
    },
    {
      path: '/infrastructures/communication',
      element: <Communication />
    },
    {
      path: '/infrastructures/energy',
      element: <Energy />
    },
    {
      path: '/infrastructures/fuel',
      element: <Fuel />
    },
    {
      path: '/infrastructures/government',
      element: <Government />
    },
    {
      path: '/infrastructures/metallurgy',
      element: <Metallurgy />
    },
    {
      path: '/infrastructures/mining',
      element: <Mining />
    },
    {
      path: '/infrastructures/nuclear',
      element: <Nuclear />
    },
    {
      path: '/infrastructures/transport',
      element: <Transport />
    },
    {
      path: '/infrastructures/markdown',
      element: <Markdown />
    }
  ]
};

export default InfrastructureRoutes;
