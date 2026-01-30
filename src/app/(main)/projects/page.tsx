import type { Metadata } from 'next';
import Cases from '@components/cases/Cases';
import { pagesMetadata } from '@/config/seo';
import Hero from './components/hero/Hero';
import styles from './page.module.scss';

export const metadata: Metadata = pagesMetadata.projects;

export default function Contact() {
  return (
    <>
      <Hero />
      <section className={styles.projects}>
        <div className="wrapper">
          <Cases />
        </div>
      </section>
    </>
  );
}
