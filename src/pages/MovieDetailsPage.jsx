import MovieDetails from 'components/MovieDetails';
import { getMovieDetails } from 'moviesApi';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const handleError = useCallback(
    err => {
      const {
        response: {
          data: { status_message },
          status,
        },
      } = err;
      if (status === 404) {
        navigate('/404', {
          state: { message: status_message, from: '/movies' },
        });
      } else {
      }
    },
    [navigate]
  );
  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(err => {
        handleError(err);
      });
  }, [movieId, handleError]);
  if (!movie) {
    return null;
  }
  return <MovieDetails movie={movie} />;
};
export default MovieDetailsPage;
