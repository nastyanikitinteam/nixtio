import PolandFlag from '@icons/poland.svg';
import SpainFlag from '@icons/spain.svg';
import SwitzerlandFlag from '@icons/switzerland.svg';
import ArsenPhoto from '@images/contact/arsen.jpg';
import BogdanPhoto from '@images/contact/bohdan.jpg';
import MichaelPhoto from '@images/contact/michael.jpg';
import type { ContactBlock } from '@/types/contact';

export const contactBlocks: ContactBlock[] = [
  {
    name: 'Arsen',
    photo: ArsenPhoto,
    title: 'For a project estimate contact Arsen',
    phone: '+48577612187',
    countryFlag: <PolandFlag />,
    socialMedia: {
      whatsapp: '+48577612187',
      telegram: '+48577612187',
    },
    email: 'arsen@nixtio.com',
  },
  {
    name: 'Michael',
    photo: MichaelPhoto,
    title: 'For a project estimate contact Michael',
    phone: '+41795943541',
    countryFlag: <SwitzerlandFlag />,
    socialMedia: {
      whatsapp: '+41795943541',
      telegram: '+41795943541',
    },
    email: 'sales.nixtio@gmail.com',
  },
  {
    name: 'Bogdan',
    photo: BogdanPhoto,
    title: 'For any inquiries contact Bogdan',
    phone: '+34600348548',
    countryFlag: <SpainFlag />,
    socialMedia: {
      telegram: '+34600348548',
    },
    email: 'artstudio.nikitin@gmail.com',
  },
];
