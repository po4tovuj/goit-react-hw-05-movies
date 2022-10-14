import MovieCard from 'components/MovieCard';
import { getTrending } from 'moviesApi';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem } from './Home.styled';

export const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    getTrending()
      .then(result => {
        console.log('result.data.results: ', result);
        return result.data.results;
      })
      .then(setFilms);
  }, []);

  return (
    <List>
      {films.map(
        ({
          title = '',
          name = '',
          poster_path,
          overview,
          id,
          vote_average,
        }) => (
          <ListItem key={id}>
            <NavLink to={`/movies/${id}`}>
              <MovieCard
                title={title || name}
                imgUrl={poster_path}
                id={id}
                overview={overview}
                rate={vote_average}
              />
            </NavLink>
          </ListItem>
        )
      )}
    </List>
  );
};
