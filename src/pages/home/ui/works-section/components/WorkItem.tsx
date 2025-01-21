import { FC } from 'react';

import styles from './WorkItem.module.scss';

export const WorkItem: FC<{ path: string }> = ({ path }) => {
  return (
    <li className={styles.work}>
      <img
        loading="lazy"
        className={styles.work__image}
        src={`${import.meta.env.BASE_URL}/images/works/Rectangle ${path}.png`}
        alt="work"
      ></img>
    </li>
  );
};
