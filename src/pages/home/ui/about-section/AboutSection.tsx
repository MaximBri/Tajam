import decorSvg from '/images/about/about-decor.svg';
import styles from './AboutSection.module.scss';

export const AboutSection = () => {
  return (
    <section id='about' className={styles.about}>
      <img className={styles.about__image} src={decorSvg} alt="decoration" />
      <div className={styles.about__texts}>
        <h2 className={styles.about__title}>Our Story</h2>
        <h3 className={styles.about__subtitle}>
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
          nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
          odio sit amet nibh vulputate cursus
        </h3>
        <h3 className={styles.about__subtitle}>
          Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
          ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </h3>
        <button className="button">Learn more</button>
      </div>
    </section>
  );
};
