import MovieCard from 'components/MovieCard';
import { NavLink, Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <div> This is movies page route</div>
      <NavLink to="3234234">
        {' '}
        <MovieCard />
      </NavLink>
      <Outlet />
    </>
  );
};
export default Movies;
