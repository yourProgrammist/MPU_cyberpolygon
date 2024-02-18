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
          id: 'register3',
          title: 'Оборонная промышленность',
          type: 'item',
          url: '/infrastructures/military',
          target: true
        },
        {
          id: 'register4',
          title: 'Здравоохранение',
          type: 'item',
          url: '/infrastructures/health',
          target: true
        },
        {
          id: 'register5',
          title: 'Топливная промышленность',
          type: 'item',
          url: '/infrastructures/third',
          target: true
        },
        {
          id: 'register6',
          title: 'Горнодобывающая промышленность',
          type: 'item',
          url: '/infrastructures/fouth',
          target: true
        },
        {
          id: 'register7',
          title: 'Атомная промышленность',
          type: 'item',
          url: '/infrastructures/fifth',
          target: true
        },
        {
          id: 'register8',
          title: 'Ракетно-космическая промышленность',
          type: 'item',
          url: '/infrastructures/sixth',
          target: true
        },
        {
          id: 'register9',
          title: 'Металлургическая промышленность',
          type: 'item',
          url: '/infrastructures/seventh',
          target: true
        },
        {
          id: 'register10',
          title: 'Энергетика',
          type: 'item',
          url: '/infrastructures/eighth',
          target: true
        },
        {
          id: 'register11',
          title: 'Транспорт',
          type: 'item',
          url: '/infrastructures/nineth',
          target: true
        },
        {
          id: 'register12',
          title: 'Кредитно-финансовая сфера',
          type: 'item',
          url: '/infrastructures/tenth',
          target: true
        },
        {
          id: 'register13',
          title: 'Связь',
          type: 'item',
          url: '/infrastructures/eleven',
          target: true
        },
        {
          id: 'register14',
          title: 'Государственные органы',
          type: 'item',
          url: '/infrastructures/twelve',
          target: true
        },
        {
          id: 'register15',
          title: 'Химическая промышленность',
          type: 'item',
          url: '/infrastructures/threeten',
          target: true
        }
      ]
    }
  ]
};

export default pages;
