import PropTypes from 'prop-types';
import { useState } from 'react';

import { Wrapper, Input, Icon } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  const [searchQuery, setSearchQuery] = useState(value);
  const onSubmit = e => {
    e.preventDefault();

    onChange(searchQuery);
  };
  const handleIconClick = e => {
    onChange(searchQuery);
  };
  return (
    <Wrapper onSubmit={onSubmit}>
      <Icon onClick={handleIconClick} />
      <Input
        type="text"
        onChange={e => {
          setSearchQuery(e.target.value);
          console.log('e.target.value: ', e.target.value);
        }}
        name="query"
        value={searchQuery}
        placeholder="Search..."
      />
    </Wrapper>
  );
};
SearchBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
