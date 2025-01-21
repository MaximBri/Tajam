import { TeamPerson } from './components/TeamPerson';
import { teamList } from './model/teamList';
import styles from './TeamSection.module.scss';

export const TeamSection = () => {
  return (
    <section id='teams' className={styles.team}>
      <h2 className={styles.team__title}>MEET OUR AMAZING TEAM</h2>
      <h3 className={styles.team__subtitle}>
        Lorem ipsum dolor sit amet proin gravida nibh vel velit
      </h3>
      <div className={styles.team__separator}></div>
      <ul className={styles['team__team-list']}>
        {teamList.map((man, index) => {
          return (
            <TeamPerson
              name={man.name}
              job={man.job}
              image_path=""
              key={index}
            />
          );
        })}
      </ul>
      <h4 className={styles.team__other}>
        Become part of our dream team, let’s join us !
      </h4>
      <button className="button">we are hiring</button>
    </section>
  );
};
