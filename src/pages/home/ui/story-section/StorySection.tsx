import playerSvg from '/images/story/player.svg';
import styles from './StorySection.module.scss';

export const StorySection = () => {
  return (
    <section className={styles.story}>
      <button className={styles.story__body}>
        <img className={styles.story__image} src={playerSvg} alt="player" />
        <h2 className={styles.story__title}>Watch our story</h2>
      </button>
    </section>
  );
};
