import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import Textarea from '@/components/textarea/Textarea';
import PageHeader from './components/header/Header';

export default function Home() {
  return (
    <div>
      <main>
        <section>
          <div className="wrapper">
            <PageHeader />
            <Button href="/about" variant="primary" size="sm">
              About
            </Button>

            <Input label="Name" placeholder="Enter your name" />
            <Textarea label="Message" placeholder="Enter your message" />
          </div>
        </section>
      </main>
    </div>
  );
}
