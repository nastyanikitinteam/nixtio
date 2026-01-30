import React from 'react';

export type SocialLink = {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  backgroundColor: string;
};
