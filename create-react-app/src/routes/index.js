import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import AuthenticationRoutes2 from './SecondRoutes';
import InfrastructureRoutes from './InfrastructureRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, AuthenticationRoutes, AuthenticationRoutes2, InfrastructureRoutes]);
}
