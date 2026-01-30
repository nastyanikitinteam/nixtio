import type { StaticImageData } from 'next/image';

export type Case = {
  id: string;
  title: string;
  year: string;
  imageUrl: StaticImageData;
  hoverImageUrl: StaticImageData;
  link: string;
};
