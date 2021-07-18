import React, { memo, useState } from 'react';
import SearchBar from './SearchBar.jsx'
import '../styles/SearchComponent.css'
import DropdownSelector from './DropdownSelector'
import Loader from '../searchResult/Loader'

//TODO: переписать через FILTERS & Object.keys
const initialState = {
  categoryFilter: 'all',
  dateFilter: 'relevance'
}

const FILTERS = {
  categoryFilter: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],
  dateFilter: ['relevance', 'newest']
}

const SearchComponent = () => {
  const [filtersState, setFiltersState] = useState(initialState)

  return (
    <div className="main-image">
    <h1>Search for Books</h1>
    <div className="search-settings">
      <SearchBar filtersState={filtersState}/>
      <div className="selectors">
        {Object.entries(FILTERS).map(([key, options]) => (
          <DropdownSelector options={options} key={key} filterName={key} setFiltersState={setFiltersState}/>
        ))}
        {/* <Loader/> */}
      </div>
    </div>
  </div>
  )
}

export default memo(SearchComponent)
