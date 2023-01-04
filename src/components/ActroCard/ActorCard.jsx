import PropTypes from 'prop-types';

import {
  LinkStyled,
  ListItem,
  MovieTittle,
  Image,
} from 'components/MovieListItem/MovieListItem.styled';
import defaultImg from 'images/no_poster.jpg';
import { useLocation } from 'react-router-dom';

export const ActorCard = ({ id, title, imgUrl }) => {
  const location = useLocation();
  return (
    <ListItem key={id}>
      <LinkStyled to={`/actors/${id}`} state={{ from: location.state.from }}>
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
ActorCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  imgUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};
