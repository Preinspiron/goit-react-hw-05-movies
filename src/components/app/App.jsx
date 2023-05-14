import { lazy } from 'react';
// import { Notfound } from '../../pages';
import SharedHeader from '../shared/shared';

import { Routes, Route, Navigate } from 'react-router-dom';
import s from './App.module.scss';

const Home = lazy(() => import('pages/Home'));
const Details = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));
const Coast = lazy(() => import('components/coast/Coast'));
const Reviews = lazy(() => import('components/reviews/Reviews'));

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
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
