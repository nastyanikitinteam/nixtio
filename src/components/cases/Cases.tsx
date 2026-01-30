import Image from 'next/image';
import Link from 'next/link';
import { cases } from '@config/projects';
import cn from 'classnames';
import styles from './cases.module.scss';

export default function Cases() {
  return (
    <div className={styles.cases}>
      {cases.map((caseItem) => (
        <Link key={caseItem.id} href={caseItem.link} className={styles.case}>
          <div className={styles.info}>
            <h3 className="h5">{caseItem.title}</h3>
            <span className={cn(styles.year, 'text--xs')}>{caseItem.year}</span>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={caseItem.imageUrl}
              alt={caseItem.title}
              fill
              className={styles.image}
            />
            <Image
              src={caseItem.hoverImageUrl}
              alt={`${caseItem.title} hover`}
              fill
              className={styles.hoverImage}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
