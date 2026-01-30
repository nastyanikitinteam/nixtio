import VideoBlock from '@components/videoBlock/VideoBlock';
import HeroInfo from '@/components/heroInfo/HeroInfo';
import styles from './hero.module.scss';

export default function Hero() {
  const mainVideoSrc = '/videos/projects/projects-main.mp4';
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <div className="default-section --spacing-md">
          <HeroInfo
            title="Projects"
            tagline="2010-25©"
            subtitle="We've helped businesses across industries achieve their goals. Here are some of our recent projects."
            direction="row"
          />

          <div className="">
            <VideoBlock src={mainVideoSrc} />
          </div>
        </div>
      </div>
    </section>
  );
}
