'use client';

import { ReactNode } from 'react';
import PageTransition from './PageTransition';

type PageTransitionWrapperProps = {
  children: ReactNode;
};

export default function PageTransitionWrapper({
  children,
}: PageTransitionWrapperProps) {
  return <PageTransition>{children}</PageTransition>;
}
