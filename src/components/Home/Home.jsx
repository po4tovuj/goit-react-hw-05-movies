import { getTrending } from 'moviesApi';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { Pagination } from 'components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';

export const Home = () => {
  const [films, setFilms] = useState([]);
  const [searchParam, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(0);

  const page = searchParam.get('page') || 1;
  useEffect(() => {
    getTrending({ page }).then(({ page, results, total_results }) => {
      setTotalPages(total_results);
      setFilms(results);
      // return results;
    });
  }, [page]);
  const handlePageChange = nextPage => {
    console.log('nextPage: ', nextPage);
    nextPage !== page && setSearchParams({ page: nextPage });
  };
  return (
    <>
      <Pagination
        page={Number(page)}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      ></Pagination>
      <MovieList movies={films} />
    </>
  );
};
