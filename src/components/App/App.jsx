import HomePage from 'pages/HomePage';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';

const MoviesPage = lazy(() => import('pages/MoviesPage'));

const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:moveId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
