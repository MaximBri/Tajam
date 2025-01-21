import { FC } from 'react';

import { teamListInterface } from '../model/teamList';
import styles from './TeamPerson.module.scss';

export const TeamPerson: FC<teamListInterface> = ({ name, job }) => {
  return (
    <li className={styles.person}>
      <div className={styles.person__photo}>{/* <img></img> */}</div>
      <div className={styles.person__info}>
        <h3 className={styles['person__info-name']}>{name}</h3>
        <h4 className={styles['person__info-job']}>{job}</h4>
      </div>
    </li>
  );
};
