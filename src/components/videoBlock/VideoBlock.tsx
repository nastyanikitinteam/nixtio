'use client';

import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import styles from './video-block.module.scss';

interface VideoBlockProps {
  src: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

export default function VideoBlock({
  src,
  className,
  muted: initialMuted = true,
  loop = true,
  playsInline = true,
}: VideoBlockProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(initialMuted);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!video) return;

          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;
          const viewportCenter = viewportHeight / 2;

          const topTouchesCenter = rect.top <= viewportCenter && rect.top >= 0;

          const bottomTouchesTop = rect.bottom <= 0;

          const topBelowCenter = rect.top > viewportCenter;

          const shouldPlay =
            topTouchesCenter && !bottomTouchesTop && !topBelowCenter;

          if (shouldPlay) {
            // Запускаємо відео
            if (video.paused) {
              video.play().catch((error) => {
                console.error('Error playing video:', error);
              });
            }
          } else {
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px',
      }
    );

    observer.observe(container);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      observer.disconnect();
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div ref={containerRef} className={cn(styles.container, className)}>
      <video
        ref={videoRef}
        src={src}
        className={styles.video}
        muted={isMuted}
        loop={loop}
        playsInline={playsInline}
        autoPlay={false}
      />
      <button
        onClick={toggleMute}
        className={cn(styles.muteButton, {
          [styles.muted]: isMuted,
        })}
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        type="button"
      >
        {isMuted ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.62 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.03C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
