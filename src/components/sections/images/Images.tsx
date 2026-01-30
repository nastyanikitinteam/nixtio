import Image, { type StaticImageData } from 'next/image';
import styles from './images.module.scss';

type ImagesProps = {
  firstImage: StaticImageData;
  firstImageAlt: string;
  secondImage: StaticImageData;
  secondImageAlt: string;
};

export default function ImagesSection({
  firstImage,
  firstImageAlt,
  secondImage,
  secondImageAlt,
}: ImagesProps) {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <div className={styles.blocks}>
          {firstImage && (
            <div className={styles.block}>
              <Image src={firstImage} alt={firstImageAlt} fill />
            </div>
          )}

          {secondImage && (
            <div className={styles.block}>
              <Image src={secondImage} alt={secondImageAlt} fill />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
