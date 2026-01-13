import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="search-page">
      <h1>Search Results</h1>
      {query && <p>Searching for: {query}</p>}
      {/* search results here */}
    </div>
  );
};

export default SearchPage;
