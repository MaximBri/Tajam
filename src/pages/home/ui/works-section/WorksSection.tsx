import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { setShowedWorks } from './model/setShowedWorks';
import { worksList } from './model/worksList';
import { WorkItem } from './components/WorkItem';
import rightArrovSvg from '/images/works/right-arrow.svg';
import styles from './WorksSection.module.scss';

export const WorksSection = () => {
  const { showedDefault, addItemsOnClick } = useMemo(
    () => setShowedWorks(),
    []
  );
  const [showedItems, setShowedItems] = useState<number>(showedDefault);
  return (
    <section id="works" className={styles.works}>
      <div className={styles.works__header}>
        <h2 className={styles['works__header-title']}>Our works</h2>
        <Link className={styles['works__header-link']} to="#">
          See All Project in dribbble
          <img src={rightArrovSvg} alt="arrow" />
        </Link>
      </div>
      <ul className={styles.works__list}>
        {worksList.slice(0, showedItems).map((work, index) => {
          return <WorkItem path={work} key={index} />;
        })}
      </ul>
      {showedItems === worksList.length ? (
        <button
          onClick={() => setShowedItems(showedDefault)}
          className={`button ${styles.works__button}`}
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() =>
            setShowedItems(
              showedItems + addItemsOnClick > worksList.length
                ? worksList.length
                : showedItems + addItemsOnClick
            )
          }
          className={`button ${styles.works__button}`}
        >
          Load more
        </button>
      )}
    </section>
  );
};
