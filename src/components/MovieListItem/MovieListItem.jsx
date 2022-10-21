import {
  LinkStyled,
  ListItem,
  MovieTittle,
  Image,
} from './MovieListItem.styled';
import defaultImg from 'images/no_poster.jpg';
import { useLocation } from 'react-router-dom';
export const MovieListItem = ({ id, title, imgUrl, rate, votes }) => {
  const location = useLocation();
  // console.log('location listItem: ', location.state);
  return (
    <ListItem key={id}>
      <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
        <Image
          src={
            imgUrl ? `https://image.tmdb.org/t/p/w200${imgUrl} ` : defaultImg
          }
          alt={title}
          loading="lazy"
        />
        <MovieTittle title={title}>{title}</MovieTittle>
      </LinkStyled>
    </ListItem>
  );
};
