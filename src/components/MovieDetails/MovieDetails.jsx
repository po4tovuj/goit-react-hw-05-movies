import { lazy } from 'react';

const MovieCard = lazy(() => import('components/MovieCard/MovieCard'));
export const MovieDetails = ({ movie }) => {
  const {
    original_title: title,
    poster_path: imageUrl,
    genres,
    vote_average: rate,
    overview,
    vote_count: votes,
  } = movie;
  return (
    <MovieCard
      title={title}
      imageUrl={imageUrl}
      rate={rate}
      genres={genres}
      overview={overview}
      votes={votes}
    ></MovieCard>
  );
};
