import { List } from './MovieList.styled';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';
export const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(
        ({
          title = '',
          name = '',
          poster_path,
          overview,
          id,
          vote_average,
        }) => (
          <MovieListItem
            key={id}
            title={title || name}
            imgUrl={poster_path}
            id={id}
            overview={overview}
            rate={vote_average}
          />
        )
      )}
    </List>
  );
};
