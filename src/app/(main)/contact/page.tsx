import ImagesSection from '@components/sections/images/Images';
import Photo1 from '@images/contact/photo-1.jpg';
import Photo2 from '@images/contact/photo-2.jpg';
import ContactSection from './components/contactSection/ContactSection';
import SocialMedia from './components/socialMedia/SocialMedia';

export default function Contact() {
  return (
    <>
      <ContactSection />
      <SocialMedia />
      <ImagesSection
        firstImage={Photo1}
        firstImageAlt="A group of people working on laptops by a pool in a sunny setting."
        secondImage={Photo2}
        secondImageAlt="A relaxed group chatting on a cozy outdoor terrace."
      />
    </>
  );
}
