import React from 'react';
import type { StaticImageData } from 'next/image';

export type ContactBlock = {
  name: string;
  photo: StaticImageData;
  title: string;
  phone: string;
  countryFlag?: React.ReactNode;
  socialMedia: {
    whatsapp?: string;
    telegram?: string;
  };
  email: string;
};
