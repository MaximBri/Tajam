import playerSvg from '/images/story/player.svg';
import styles from './StorySection.module.scss';
import { VideoPopUp } from '@/widgets/pop-ups';
import { storySectionModel } from './model/StorySectionModel';

export const StorySection = () => {
  const { closePopUp, isOpen, onButtonClick } = storySectionModel();
  return (
    <>
      <section className={styles.story}>
        <button onClick={() => onButtonClick()} className={styles.story__body}>
          <img
            loading="lazy"
            className={styles.story__image}
            src={playerSvg}
            alt="player"
          />
          <h2 className={styles.story__title}>Watch our story</h2>
        </button>
      </section>
      {isOpen && <VideoPopUp func={closePopUp} />}
    </>
  );
};
