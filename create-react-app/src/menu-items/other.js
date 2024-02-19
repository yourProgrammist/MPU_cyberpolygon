// assets
import { IconPlayerEject, IconHelp } from '@tabler/icons';

// constant
const icons = { IconPlayerEject, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Player table',
      type: 'item',
      url: '/sample-page',
      icon: icons.IconPlayerEject,
      breadcrumbs: false
    }
  ]
};

export default other;
