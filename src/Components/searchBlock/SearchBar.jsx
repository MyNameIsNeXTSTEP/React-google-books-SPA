import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/SearchBar.css'
import searchImage from '../../assets/search.png'
import { getBooks } from '../../actions/actions'

const SearchBar = ({ filtersState }) => {
  const dispatch = useDispatch()

	const inputRef = useRef()
	const FoundBooks = useSelector((state) => state.booksBySearchText)
	const [currentText, setCurrentText] = useState('')

	useEffect(() => {
		if (!FoundBooks) {
			return;
		}

		const result = FoundBooks[currentText] || []

		const filteredResults = Object.entries(result)
			.filter(([key, value]) => (value.volumeInfo.categories = filtersState.categoryFilter
		))

		if (filtersState.dateFilter === 'newest'){
			const sortedResults = filteredResults.sort((a, b) =>
			new Date(a[1].volumeInfo.publishedDate) - new Date(b[1].volumeInfo.publishedDate))

			const show = sortedResults.map((el) => (
				console.log(el[1].volumeInfo.publishedDate)
			))
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [FoundBooks])

	const handleSubmit = useCallback((e) => {
		e.preventDefault()
		const inputValue = inputRef.current.value
		setCurrentText(inputValue)

		if (inputValue){
			dispatch(getBooks(inputValue))
		}
	
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [FoundBooks])

  return (
      <form
				className="formSearchBar"
				onSubmit={handleSubmit}
			>
        <input
					className="searchBar-input"
       		type='text'
        	id='search'
					ref = {inputRef}
        	placeholder={'Search'}
        />
        <button
        	className='search-button'
				>
          <img
            srcSet={searchImage}
            className='search-image'
						alt=''></img>
        </button>
      </form>
    )
}

SearchBar.propTypes = {
    getBooks: PropTypes.func,
}

export default memo(SearchBar);
