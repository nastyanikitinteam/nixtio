import { ReactNode } from 'react';

import cn from 'classnames';
import styles from './hero.module.scss';

type HeroProps = {
  title: string;
  direction?: 'row' | 'column';
  subtitle?: string | ReactNode;
  tagline?: string;
};

export default function Hero({
  title,
  direction = 'row',
  subtitle,
  tagline,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className="wrapper">
        <div className={cn(styles.content, styles[`content--${direction}`])}>
          <div className={styles.title}>
            <h1 className="h1">{title}</h1>
          </div>
          {subtitle || tagline ? (
            <div className={styles.info}>
              {tagline && <p className={styles.tagline}>{tagline}</p>}
              {subtitle && (
                <p
                  className={cn(
                    styles.subtitle,
                    direction === 'column' && 'text--lg'
                  )}
                >
                  {subtitle}
                </p>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
