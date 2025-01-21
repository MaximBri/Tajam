import styles from './MainSection.module.scss';

export const MainSection = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.main__title}>We Are Awesome Creative Agency </h1>
      <span className={styles.main__separator}></span>
      <h2 className={styles.main__subtitle}>
        This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
        auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
        elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
        amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
        velit.
      </h2>
      <button className={`button ${styles.main__button}`} type="button">
        Learn more
      </button>
    </section>
  );
};
