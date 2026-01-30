import PolandFlag from '@icons/poland.svg';
import SpainFlag from '@icons/spain.svg';
import SwitzerlandFlag from '@icons/switzerland.svg';
import ArsenPhoto from '@images/contact/arsen.jpg';
import BehanceIcon from '@images/contact/behance.svg';
import BogdanPhoto from '@images/contact/bohdan.jpg';
import ClutchIcon from '@images/contact/clutch.svg';
import DesignrushIcon from '@images/contact/designrush.svg';
import DribbbleIcon from '@images/contact/dribble.svg';
import FacebookIcon from '@images/contact/facebook.svg';
import InstagramIcon from '@images/contact/instagram.svg';
import LinkedInIcon from '@images/contact/linkedin.svg';
import MichaelPhoto from '@images/contact/michael.jpg';
import PinterestIcon from '@images/contact/pinterest.svg';
import XIcon from '@images/contact/x.svg';
import type { ContactBlock } from '@/types/contact';
import type { SocialLink } from '@/types/social';

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

export const socialLinks: SocialLink[] = [
  {
    href: 'https://dribbble.com/Nixtio',
    icon: DribbbleIcon,
    text: 'Dribbble',
    backgroundColor: 'rgb(224, 74, 132)',
  },
  {
    href: 'https://www.behance.net/nixtio',
    icon: BehanceIcon,
    text: 'Behance',
    backgroundColor: 'rgb(0, 86, 255)',
  },
  {
    href: 'https://www.pinterest.com/NixtioDigitalAgency/',
    icon: PinterestIcon,
    text: 'Pinterest',
    backgroundColor: 'rgb(183, 9, 27)',
  },
  {
    href: 'https://x.com/Bogdanlifestyle',
    icon: XIcon,
    text: 'X',
    backgroundColor: 'rgb(10, 10, 10)',
  },
  {
    href: 'https://www.facebook.com/nixtioagency',
    icon: FacebookIcon,
    text: 'Facebook',
    backgroundColor: 'rgb(25, 115, 235)',
  },
  {
    href: 'https://www.instagram.com/nixtioagency/',
    icon: InstagramIcon,
    text: 'Instagram',
    backgroundColor: 'rgb(176, 55, 137)',
  },
  {
    href: 'https://www.linkedin.com/company/nixtioagency/',
    icon: LinkedInIcon,
    text: 'Linkedin',
    backgroundColor: 'rgb(1, 99, 193)',
  },
  {
    href: 'https://clutch.co/profile/nixtio-digital-agency',
    icon: ClutchIcon,
    text: 'Clutch',
    backgroundColor: 'rgb(10, 10, 10)',
  },
  {
    href: 'https://www.designrush.com/agency/profile/nixtio',
    icon: DesignrushIcon,
    text: 'Designrush',
    backgroundColor: 'rgb(1, 47, 141)',
  },
];
