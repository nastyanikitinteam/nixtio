import Link from 'next/link';
import Button from '@/components/button/Button';
import PageHeader from './components/header/Header';

export default function Home() {
  return (
    <div>
      <main>
        <PageHeader />
        <Button variant="primary" size="md">
          Get Started
        </Button>
        <Link href="/about">About</Link>
      </main>
    </div>
  );
}
