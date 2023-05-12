import { Home, Notfound, Movies } from '../../pages';
import { SharedHeader } from '..';
import { Details } from '../../pages/MovieDetails';
import { Routes, Route } from 'react-router-dom';
import s from './App.module.scss';
import { Coast } from '../Coast/Coast';
import { Reviews } from '../Reviews/Reviews';
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
