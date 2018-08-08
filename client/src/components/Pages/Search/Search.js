import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../../Forms/Search/SearchForm';

const Search = props => {
  return (
    <div>
      <h1>{props.label}</h1>
      <SearchForm />
    </div>
  );
};

Search.defaultProps = {
  label: 'Search Page'
};

Search.propTypes = {
  label: PropTypes.any
};

export default Search;
