import React from 'react';
import Slide from '../components/slide';
import { SLIDESHOW_CONTAINER_CLASS, SLIDESHOW_ANCHOR_CLASS, SLIDESHOW_IMAGE_SPACING } from '../lib/constants';
import { LandingDirectory } from '@/landing-directory';

type AccountStackProps = {
  start: number;
  end: number;
  slideshows: LandingDirectory;
  directory: LandingDirectory;
};

export default function AccountStack({ start, end, slideshows, directory }: AccountStackProps) {

  // Create placeholders so the layout doesn't jump around
  const indices = Array.from({ length: end - start }, (_, i) => i);

  if (directory.length < end) {
    return (
      <>
        {indices.map((index) => (
          <div className={SLIDESHOW_ANCHOR_CLASS} key={index}>
            <div className={SLIDESHOW_CONTAINER_CLASS}>
              <div className={SLIDESHOW_IMAGE_SPACING} />
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {indices.map((_, slideshowIndex) => {
        let account = directory[Math.floor(Math.random() * directory.length)];
        return <Slide account={account} index={slideshowIndex} key={account.username} />
      })}
    </>
  );
};