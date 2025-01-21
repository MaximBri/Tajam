import { Outlet } from 'react-router-dom';

import { Footer } from './footer/Footer';
import { MainSectionWrapper } from '@/pages/home/ui';

export const MainLayout = () => {
  return (
    <>
      <MainSectionWrapper />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
