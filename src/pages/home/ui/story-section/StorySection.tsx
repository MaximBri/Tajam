import playerSvg from '/images/story/player.svg';
import styles from './StorySection.module.scss';
import { useEffect, useRef, useState } from 'react';
import { VideoPopUp } from '@/widgets/pop-ups';

export const StorySection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isScrollDisabled = useRef(false);

  const disableScroll = () => {
    if (isScrollDisabled.current) return;
    document.body.style.overflowY = 'hidden';
    isScrollDisabled.current = true;
  };

  const enableScroll = () => {
    if (!isScrollDisabled.current) return;
    document.body.style.overflowY = '';
    isScrollDisabled.current = false;
  };
  const onButtonClick = () => {
    disableScroll();
    setIsOpen(true);
  };

  const closePopUp = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      enableScroll();
    }
  }, [isOpen]);

  return (
    <>
      <section className={styles.story}>
        <button onClick={() => onButtonClick()} className={styles.story__body}>
          <img className={styles.story__image} src={playerSvg} alt="player" />
          <h2 className={styles.story__title}>Watch our story</h2>
        </button>
      </section>
      {isOpen && <VideoPopUp func={closePopUp} />}
    </>
  );
};
