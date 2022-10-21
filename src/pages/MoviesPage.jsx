import { FilterPanel } from 'components/FilterPanel/FilterPanel';
import { MovieList } from 'components/MovieList/MovieList';
import { getTrending, searchMovies } from 'moviesApi';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get('query') ?? '';
  console.log('searchParam: ', searchParam);
  const pageParam = searchParams.get('page') ?? 1;
  useEffect(() => {
    if (!searchParam) {
      getTrending({ page: pageParam }).then(({ results, total_pages }) => {
        console.log(' total_pages: ', total_pages);
        setMovies(results);
        setTotalPages(total_pages);
      });
    } else {
      searchMovies({ query: searchParam, page: pageParam }).then(
        ({ results, total_pages }) => {
          console.log(' total_pages 3: ', total_pages);
          setMovies(results);
          setTotalPages(total_pages);
        }
      );
    }
  }, [pageParam, searchParam]);

  const handlePageChange = page => {
    console.log('page: ', page);
    const newSearchQuery = new URLSearchParams();
    searchParam && newSearchQuery.append('query', searchParam);
    newSearchQuery.append('page', page);
    setSearchParams(newSearchQuery); // setPage(page);
  };
  const handleChangeFilter = value => {
    setSearchParams(value ? { query: value, page: 1 } : { query: '', page: 1 });
  };

  return (
    <main>
      <FilterPanel
        page={Number(pageParam)}
        totalPages={totalPages}
        searchQuery={searchParam}
        changeSearch={handleChangeFilter}
        onPageChange={handlePageChange}
      />
      <MovieList movies={movies} />
      <Suspense fallback={<div>Loading data....</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default Movies;
