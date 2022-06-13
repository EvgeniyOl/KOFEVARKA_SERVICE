import React from 'react';
import './search.css';
import search from './../../../Assets/img/search 2.png';

const Search = (props) => {
  return (
    <div className='search-root'>
      <img src={search} alt="search-img" />
      <input
        className="search-input"
        type="text"
        name="search"
        id=""
        placeholder="поиск"
      />
    </div>
  );
};

export default Search;
