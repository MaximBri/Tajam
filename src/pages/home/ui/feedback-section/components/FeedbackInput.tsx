import { ChangeEventHandler, FC } from 'react';

import styles from './FeedbackInput.module.scss';

export interface FeedbackInputInterface {
  value: string;
  setValue: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  placeholder: string;
}

export const FeedbackInput: FC<FeedbackInputInterface> = ({
  value,
  setValue,
  placeholder,
  error = null,
}) => {
  return (
    <label className={styles['input-wrapper']}>
      <input
        className={styles.input}
        value={value}
        onChange={setValue}
        placeholder={placeholder}
      ></input>
      {error && <div className={styles.input__error}>{error}</div>}
    </label>
  );
};
