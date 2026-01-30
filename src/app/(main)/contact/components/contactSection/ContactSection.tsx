'use client';

import Image from 'next/image';
import CopyIcon from '@icons/copy.svg';
import TelegramIcon from '@icons/telegram.svg';
import WhatsAppIcon from '@icons/whatsapp.svg';
import cn from 'classnames';
import HeroInfo from '@/components/heroInfo/HeroInfo';
import { contactBlocks } from '@/config/contacts';
import styles from './contact-section.module.scss';

export default function ContactSection() {
  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
  };

  return (
    <section className={styles.section}>
      <div className="wrapper">
        <div className="default-section --spacing-md">
          <HeroInfo
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

          <div className={styles.blocks}>
            {contactBlocks.map((block) => (
              <div key={block.name} className={styles.block}>
                <div className={styles.photo}>
                  <Image src={block.photo} alt={block.name} fill />
                </div>
                <div className={styles.info}>
                  <h3
                    className="h3--secondary"
                    dangerouslySetInnerHTML={{ __html: block.title }}
                  />
                  <div className={styles.contact}>
                    <a href={`tel:${block.phone}`} className={styles.phone}>
                      {block.countryFlag && (
                        <span className={styles.flag}>{block.countryFlag}</span>
                      )}
                      <p className="text--sm">{block.phone}</p>
                    </a>
                    <div className={styles.socials}>
                      {block.socialMedia.whatsapp && (
                        <a
                          href={`https://wa.me/${block.socialMedia.whatsapp.replace(/\+/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.social}
                          aria-label="WhatsApp"
                        >
                          <WhatsAppIcon />
                        </a>
                      )}
                      {block.socialMedia.telegram && (
                        <a
                          href={`https://t.me/${block.socialMedia.telegram.replace(/\+/g, '+')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.social}
                          aria-label="Telegram"
                        >
                          <TelegramIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopyEmail(block.email)}
                  className={styles.email}
                  aria-label="Copy email"
                >
                  <p className={cn(styles['email-text'], 'text--sm')}>
                    {block.email}
                  </p>
                  <span className={cn(styles['email-icon'], 'icon')}>
                    <CopyIcon />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
