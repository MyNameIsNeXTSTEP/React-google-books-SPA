import React, { memo, } from 'react';
import SearchBar from './SearchBar.jsx'
import '../styles/SearchComponent.css'
import DropdownSelector from './DropdownSelector'

const FILTERS = {
  categoryFilter: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],
  dateFilter: ['relevance', 'newest'],
  }

const SearchComponent = ({ setCurrentText, setFiltersState }) => {

  return (
    <div className="main-image">
    <h1>Search for Books</h1>
    <div className="search-settings">
      <SearchBar
        setCurrentText={setCurrentText}
      />
      <div className="selectors">
        {Object.entries(FILTERS).map(([key, options]) => (
          <DropdownSelector
            options={options}
            filterName={key}
            setFiltersState={setFiltersState}
            key={key}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default memo(SearchComponent)
