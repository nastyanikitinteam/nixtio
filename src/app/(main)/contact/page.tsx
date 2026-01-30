import Hero from '@/components/hero/Hero';

export default function Contact() {
  return (
    <>
      <Hero
        title="Contact"
        subtitle={
          <>
            Choose a time to discuss your project with us.
            <br />
            Know that we will hit the ground running the very next day!
          </>
        }
        direction="column"
      />
    </>
  );
}
