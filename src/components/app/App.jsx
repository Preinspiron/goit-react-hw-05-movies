import { lazy } from 'react';
import { Notfound } from '../../pages/notFound';
import SharedHeader from '../shared/shared';

import { Routes, Route } from 'react-router-dom';
import s from './App.module.scss';

const Reviews = lazy(() => import('../Reviews/Reviews'));
const Home = lazy(() => import('../../pages/Home'));
const Details = lazy(() => import('../../pages/MovieDetails'));
const Movies = lazy(() => import('../../pages/Movies'));
const Coast = lazy(() => import('../Coast/Coast'));

export const App = () => {
  return (
    <div className={s.container}>
      <Routes>
        <Route path="/" element={<SharedHeader />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<Details />}>
            <Route path="coast" element={<Coast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
};
