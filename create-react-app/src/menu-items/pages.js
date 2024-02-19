// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: '',
  caption: '',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Инфрастуктуры',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'military',
          title: 'Оборонная промышленность',
          type: 'item',
          url: '/infrastructures/military',
          target: false
        },
        {
          id: 'health',
          title: 'Здравоохранение',
          type: 'item',
          url: '/infrastructures/health',
          target: false
        },
        {
          id: 'fuel',
          title: 'Топливная промышленность',
          type: 'item',
          url: '/infrastructures/fuel',
          target: false
        },
        {
          id: 'mining',
          title: 'Горнодобывающая промышленность',
          type: 'item',
          url: '/infrastructures/mining',
          target: false
        },
        {
          id: 'nuclear',
          title: 'Атомная промышленность',
          type: 'item',
          url: '/infrastructures/nuclear',
          target: false
        },
        {
          id: 'aerospace',
          title: 'Ракетно-космическая промышленность',
          type: 'item',
          url: '/infrastructures/aerospace',
          target: false
        },
        {
          id: 'metallurgy',
          title: 'Металлургическая промышленность',
          type: 'item',
          url: '/infrastructures/metallurgy',
          target: false
        },
        {
          id: 'energy',
          title: 'Энергетика',
          type: 'item',
          url: '/infrastructures/energy',
          target: false
        },
        {
          id: 'transport',
          title: 'Транспорт',
          type: 'item',
          url: '/infrastructures/transport',
          target: false
        },
        {
          id: 'banking',
          title: 'Кредитно-финансовая сфера',
          type: 'item',
          url: '/infrastructures/banking',
          target: false
        },
        {
          id: 'communication',
          title: 'Связь',
          type: 'item',
          url: '/infrastructures/communication',
          target: false
        },
        {
          id: 'government',
          title: 'Государственные органы',
          type: 'item',
          url: '/infrastructures/government',
          target: false
        },
        {
          id: 'chemistry',
          title: 'Химическая промышленность',
          type: 'item',
          url: '/infrastructures/chemistry',
          target: false
        }
      ]
    }
  ]
};

export default pages;
