import React, { memo, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/SearchBar.css'
import searchImage from '../../assets/search.png'
import { getBooks } from '../../actions/actions'

const SearchBar = ({ setCurrentText }) => {

  const dispatch = useDispatch()

	const inputRef = useRef()
	const FoundBooks = useSelector((state) => state.booksBySearchText)

	const handleSubmit = useCallback((e) => {
		e.preventDefault()
		const inputValue = inputRef.current.value
		setCurrentText(inputValue)

		if (FoundBooks[inputValue] || !inputValue){
			return
		}

		dispatch(getBooks(inputValue, 0))
	
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
	sortedResults: PropTypes.array,
  getBooks: PropTypes.func,
}

export default memo(SearchBar);
