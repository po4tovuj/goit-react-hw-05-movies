import PropTypes from 'prop-types';
import { useState } from 'react';

import { Wrapper, Input, Icon } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
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
        onChange={e => setSearchQuery(e.target.value)}
        name="query"
        value={value}
        placeholder="Search..."
      />
    </Wrapper>
  );
};
SearchBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
