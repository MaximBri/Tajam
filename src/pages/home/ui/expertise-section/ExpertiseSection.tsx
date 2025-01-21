import { ExpertiseItem } from './components/expercise-item/ExpertiseItem';
import { expertiseList } from './model/expertiseList';
import styles from './ExpertiseSection.module.scss';

export const ExpertiseSection = () => {
  return (
    <section id='expertise' className={styles.expertise}>
      <h2 className={styles.expertise__title}>expertise</h2>
      <h3 className={styles.expertise__subtitle}>
        Lorem ipsum dolor sit amet proin gravida nibh vel velit
      </h3>
      <div className={styles.expertise__separator}></div>
      <ul className={styles.expertise__list}>
        {expertiseList.map((item, index) => {
          return (
            <ExpertiseItem
              title={item.title}
              subtitle={item.subtitle}
              image_path={item.image_path}
              key={index}
            />
          );
        })}
      </ul>
    </section>
  );
};
