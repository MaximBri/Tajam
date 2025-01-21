import { FeedbackInput } from './components/FeedbackInput';
import { feedbackSectionModel } from './model/FeedbackSectionModel';
import styles from './FeedbackSection.module.scss';

export interface errorInterface {
  name?: string;
  email?: string;
  tel?: string;
  subject?: string;
  message?: string;
}

export const FeedbackSection = () => {
  const functions = feedbackSectionModel();
  return (
    <section id='contact' className={styles.form}>
      <h2 className={styles.form__title}>GIVE US A GOOD NEWS</h2>
      <form className={styles.form__wrapper}>
        <FeedbackInput
          value={functions.name}
          setValue={functions.onChangeName}
          placeholder="Name"
          error={functions.error.name}
        />
        <FeedbackInput
          value={functions.email}
          setValue={functions.onChangeEmail}
          placeholder="Email"
          error={functions.error.email}
        />
        <FeedbackInput
          value={functions.tel}
          setValue={functions.onChangeTel}
          placeholder="+1 (999) 999-99-99"
          error={functions.error.tel}
        />
        <FeedbackInput
          value={functions.subject}
          setValue={functions.onChangeSubject}
          placeholder="Subject"
          error={functions.error.subject}
        />
        <label className={styles.form__textarea}>
          <textarea
            value={functions.message}
            placeholder="Your Massage"
            onChange={(e) => functions.onChangeMessage(e)}
          />
        </label>
          {functions.error.message && <div className={styles.form__error}>{functions.error.message}</div>}
        <button
          onClick={(e) => functions.sendForm(e)}
          className={`button ${styles.form__button}`}
        >
          Submit
        </button>
      </form>
    </section>
  );
};
