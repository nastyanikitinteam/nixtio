import { socialLinks } from '@config/contacts';
import cn from 'classnames';
import styles from './social-media.module.scss';

export default function SocialMedia() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <div className="default-columns">
          <div className="default-columns__subtitle">
            <h2 className="text--base">Social Media</h2>
          </div>
          <div className="default-columns__content">
            <div className={styles.content}>
              <h3 className="h3">
                Stay connected with us on social media! Follow our channels to
                see the latest updates, stories, and behind-the-scenes moments.
                Join our growing community and be part of the conversation.
              </h3>
              <div className={styles.socials}>
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.text}
                      href={link.href}
                      className={styles.socialLink}
                      style={
                        {
                          '--bg-color': link.backgroundColor,
                        } as React.CSSProperties
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.text}
                    >
                      <span className={cn(styles.icon, 'icon')}>
                        <IconComponent />
                      </span>
                      <span className={styles.text}>
                        <p>{link.text}</p>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
