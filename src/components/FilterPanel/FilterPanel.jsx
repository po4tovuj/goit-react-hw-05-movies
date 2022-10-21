import { SearchBox } from 'components/SearchBox/SearchBox';
import PropTypes from 'prop-types';
import { Wrapper } from './FilterPanel.styled';
import { Pagination } from 'components/Pagination/Pagination';

export const FilterPanel = ({
  searchQuery,
  page = 1,
  onPageChange,
  totalPages = 20,
  changeSearch,
}) => {
  return (
    <Wrapper>
      <SearchBox onChange={changeSearch} value={searchQuery} />
      <Pagination
        totalPages={totalPages}
        page={page}
        onPageChange={onPageChange}
      />
    </Wrapper>
  );
};
FilterPanel.propTypes = {
  onPageChange: PropTypes.func,
  changeSearch: PropTypes.func,
  searchQuery: PropTypes.string,
  page: PropTypes.number,
  totalPages: PropTypes.number,
};
