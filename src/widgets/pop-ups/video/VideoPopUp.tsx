import { FC } from 'react';

import styles from './VideoPopUp.module.scss';
import { Portal } from '@/shared/ui/portal/Portal';

interface VideoPopUpInterface {
  func: () => void;
}

export const VideoPopUp: FC<VideoPopUpInterface> = ({ func }) => {
  return (
    <Portal>
      <section className={styles.video}>
        <button onClick={() => func()} className={styles.video__close}>
          <div className={styles['video__close-item']}></div>
          <div className={styles['video__close-item']}></div>
        </button>
        <iframe
          className={styles.video__body}
          loading="lazy"
          src="https://rutube.ru/embed/f884aa6ed5f94120b7304506042fe5bb/?r=wd"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <div onClick={() => func()} className={styles.video__background}></div>
    </Portal>
  );
};
