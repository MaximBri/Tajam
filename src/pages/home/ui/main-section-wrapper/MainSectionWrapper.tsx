import { Header } from '@/app/layouts/header/Header';
import { MainSection } from '../main-section/MainSection';

import styles from './MainSectionWrapper.module.scss'

export const MainSectionWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MainSection />
    </div>
  );
};
