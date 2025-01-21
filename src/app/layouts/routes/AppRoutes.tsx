import { Route, Routes } from 'react-router-dom';

import MainLayout from '../MainLayout';
import { HomePage, NotFoundPage } from '@/pages';
import { routes } from './routes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={`/Tajam/${routes.home}`} element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={routes['not-found']} element={<NotFoundPage />} />
    </Routes>
  );
};
