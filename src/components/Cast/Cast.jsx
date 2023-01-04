import { getActorsDetails } from 'moviesApi';
import { useState, useEffect } from 'react';
import { ActorList } from './Cast.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ActorCard } from 'components/ActroCard/ActorCard';
import { useCallback } from 'react';

export const Cast = () => {
  const [actorsList, setActorsList] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

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
          state: {
            message: status_message,
            from: location.state?.from || '/movies',
          },
        });
      }
    },
    [navigate, location]
  );

  useEffect(() => {
    getActorsDetails(movieId)
      .then(result => {
        if (result) {
          setActorsList(result.slice(0, 16));
        }
      })
      .catch(err => {
        handleError(err);
      });
  }, [movieId, handleError]);

  if (!movieId) return null;
  return (
    <section>
      <ActorList>
        {actorsList.map(({ original_name, id, profile_path }) => (
          <ActorCard
            key={id}
            id={id}
            title={original_name}
            imgUrl={profile_path}
          ></ActorCard>
        ))}
      </ActorList>
    </section>
  );
};
