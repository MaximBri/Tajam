import { FC } from 'react';
import { expertListInterface } from '../../model/expertiseList';

import styles from './ExpertiseItem.module.scss';

export const ExpertiseItem: FC<expertListInterface> = ({
  title,
  subtitle,
  image_path,
}) => {
  return (
    <li className={styles.expertise__item}>
      <img
        className={styles['expertise__item-image']}
        src={`${import.meta.env.BASE_URL}/images/expertise/${image_path}`}
      ></img>
      <h3 className={styles['expertise__item-title']}>{title}</h3>
      <h4 className={styles['expertise__item-subtitle']}>{subtitle}</h4>
    </li>
  );
};
