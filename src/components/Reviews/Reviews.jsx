import { Pagination } from 'components/Pagination/Pagination';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getReviews } from 'moviesApi';
import { useEffect, useState } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { NothingFound, Review } from './Reviews.styled';
import { useCallback } from 'react';
export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const { movieId } = useParams();
  const [searchParam, setSearchParams] = useSearchParams();
  const pageParam = searchParam.get('page') || 1;
  const navigate = useNavigate();

  // console.log('location: ', location.state.from);
  const location = useLocation();
  const from = location.state?.from || '/movies';

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
          state: { message: status_message, from },
        });
      }
    },
    [navigate, from]
  );

  useEffect(() => {
    getReviews({ movieId, page: pageParam })
      .then(({ results, total_pages }) => {
        setTotalPages(total_pages * results.length);
        setReviews(results);
      })
      .catch(err => handleError(err));
  }, [movieId, pageParam, handleError]);

  return !reviews.length ? (
    <NothingFound>No reviews found</NothingFound>
  ) : (
    <>
      <Pagination
        page={Number(pageParam)}
        onPageChange={page => setSearchParams({ page })}
        totalPages={totalPages}
      />
      <Tabs>
        <TabList>
          {reviews.map(({ author, id }) => (
            <Tab key={author + id}>{author}</Tab>
          ))}
        </TabList>
        {reviews.map(({ id, content }) => (
          <TabPanel key={id}>
            <Review>{content}</Review>
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
  // < 1 ? (
  //
  // ) : (
  //
  // );
};
