import HomePage from 'pages/HomePage';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const NotFound = lazy(() => import('pages/NotFound'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound> Page Not Found</NotFound>} />
    </Routes>
  );
};
