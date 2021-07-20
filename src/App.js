import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux'
import SearchComponent from './Components/searchBlock/SearchComponent'
import BookList from './Components/searchResult/BooksList'
import './App.css'

const initialState = {
  categoryFilter: 'all',
  dateFilter: 'relevance'
}

function App() {
  const [filtersState, setFiltersState] = useState(initialState)
  const [currentText, setCurrentText] = useState('')

  const booksBySearchText = useSelector((state) => state.booksBySearchText)
  const ammountOfBooks = useSelector((state) => state.booksBySearchText.ammount)
  const result = useMemo(() => booksBySearchText[currentText] || [], [booksBySearchText, currentText]) 

  const filteredBooksList = useMemo(() => {
    if (!result) {
      return []
    }

    const booksInfoList = result.map((result) => (result.volumeInfo))

    if (filtersState.categoryFilter === 'all') {
      return booksInfoList
    }

    const filterToCompare = filtersState.categoryFilter.charAt(0).toUpperCase() + (filtersState.categoryFilter).slice(1)

    const filteredBooks = booksInfoList.filter((book) => (
      book?.categories?.includes(filterToCompare)
    ))

    return filteredBooks
  }, [filtersState.categoryFilter, result])

  const sortedBookList = useMemo(() => {
    if (filtersState.dateFilter !== 'newest') {
      return filteredBooksList
    }

    return [...filteredBooksList].sort((a, b) => (
      new Date(a.publishedDate) - new Date(b.publishedDate)
    ))
  }, [filtersState.dateFilter, filteredBooksList])

  return (
    <div className="App">
      <SearchComponent
        setCurrentText={setCurrentText}
        setFiltersState={setFiltersState}
      />
      {result.length ? <h3 className="ammount-area">Found {ammountOfBooks} results</h3> : ''} 
      <BookList
        currentText={currentText}
        processedResults={sortedBookList}
      />
    </div>
  );
}

export default App;