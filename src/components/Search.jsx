import React from 'react';

const Search = ({search, setSearch, handleSearch}) => {
  return (
    <div className='search-input'>
        <input type="text" placeholder='Enter city' name='search' 
        value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button type="submit" onClick={handleSearch}>Search</button>
    </div>
  );
}
export default Search;
