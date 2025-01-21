import { useState } from 'react';

import { reviewsList } from './model/reviewsList';
import dot from '/images/reviews/dot.svg';
import styles from './ReviewsSection.module.scss';

export const ReviewsSection = () => {
  const [activeReview, setActiveReview] = useState<number>(2);
  return (
    <section id="reviews" className={styles.reviews}>
      <img className={styles.reviews__dot} src={dot} alt="dot" />
      <ul className={styles.reviews__list}>
        {reviewsList.map((elem, index) => {
          return (
            <li
              className={`${styles['reviews__list-item']} ${activeReview !== index ? (activeReview > index ? styles['reviews__list-item--hidden-left'] : styles['reviews__list-item--hidden-right']) : styles['reviews__list-item--active']}`}
              key={index}
            >
              <blockquote className={styles['reviews__item-text']}>
                {elem.review}
              </blockquote>
              <h3 className={styles['reviews__item-name']}>{elem.name}</h3>
              <h4 className={styles['reviews__item-job']}>{elem.job}</h4>
            </li>
          );
        })}
      </ul>
      <div className={styles.reviews__photos}>
        {reviewsList.map((elem, index) => {
          return (
            <img
              className={`${styles['reviews__photos-image']} ${activeReview === index ? styles['reviews__photos-image--active'] : ''}`}
              onClick={() => setActiveReview(index)}
              src={`${import.meta.env.BASE_URL}/images/reviews/${elem.image_path}`}
              key={index}
              alt="man"
            ></img>
          );
        })}
      </div>
    </section>
  );
};
