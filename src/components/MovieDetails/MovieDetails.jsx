import { lazy } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MovieCard = lazy(() => import('components/MovieCard/MovieCard'));
export const MovieDetails = () => {
  return (
    <div>
      MovieDetails component
      <MovieCard />
      <NavLink to={'cast'}> cast</NavLink>
      <NavLink to={'reviews'}> Reviews</NavLink>
      <Outlet />
    </div>
  );
};
