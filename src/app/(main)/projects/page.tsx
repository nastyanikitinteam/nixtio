import type { Metadata } from 'next';
import { pagesMetadata } from '@/config/seo';
import Hero from './components/hero/Hero';

export const metadata: Metadata = pagesMetadata.projects;

export default function Contact() {
  return (
    <>
      <Hero />
    </>
  );
}
