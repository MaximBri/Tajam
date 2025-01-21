import { useState } from 'react';

import sendSvg from '/images/footer/send.svg';
import styles from './FooterForm.module.scss';

export const FooterForm = () => {
  const [mail, setMail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const checkValidEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };

  const sendForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (checkValidEmail(mail)) {
      // Основная логика
      setError('');
      setMail('');
    } else {
      setError('Некорректная почта');
    }
  };

  return (
    <form className={styles.form}>
      <label className={styles.form__wrapper}>
        <input
          type="email"
          className={styles.form__input}
          placeholder="Subscribe our newsletter"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        ></input>
        <button className={styles.form__button} onClick={(e) => sendForm(e)}>
          <img src={sendSvg} alt="send"></img>
        </button>
      </label>
      {error && <div className={styles.form__error}>{error}</div>}
    </form>
  );
};
