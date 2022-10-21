import defaultImg from 'images/no_poster.jpg';
import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  CardWrapper,
  GenresList,
  MainDetails,
  Side,
  CardHeader,
  GenreItem,
  LinkStyled,
  LinksWrapper,
  Votes,
  Title,
  Icon,
} from './MovieCard.styled';
const MovieCard = ({ title, imageUrl, rate, votes, genres, overview }) => {
  const location = useLocation();

  return (
    <CardWrapper>
      <CardHeader>
        {location.state?.from && (
          <Link to={location.state.from}>
            <Icon></Icon>
          </Link>
        )}
        <Title>{title}</Title>
      </CardHeader>
      <Side>
        <img
          src={
            imageUrl
              ? `https://image.tmdb.org/t/p/w200${imageUrl} `
              : defaultImg
          }
          alt={title}
          width="250px"
          height="300px"
          loading="lazy"
        ></img>
        <Votes>
          <span>
            <b>Votes: </b> {votes}
          </span>
          <span>
            <b>Rate: </b> {rate}
          </span>
        </Votes>
      </Side>
      <MainDetails>
        <p>{overview}</p>
        <GenresList aria-label="Genres:">
          {genres.map(({ name, id }) => (
            <GenreItem key={id}>{name}</GenreItem>
          ))}
        </GenresList>
        <LinksWrapper>
          <LinkStyled
            to={'cast'}
            state={{ from: location.pathname || '/movies' }}
          >
            Cast
          </LinkStyled>
          <LinkStyled to={'reviews'}> Reviews</LinkStyled>
        </LinksWrapper>
        <Suspense fallback={<div>Loading details...</div>}>
          <Outlet />
        </Suspense>
      </MainDetails>
    </CardWrapper>
  );
};
export default MovieCard;
