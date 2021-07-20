import React, { useCallback, useState } from 'react'
import BookCard from './BookCard'
import { useSelector, useDispatch } from 'react-redux'
import { loadMoreBooksAsync } from '../../actions/actions'
import Loader from './Loader'
import '../styles/BookList.css'

const START_INDEX = 30

function BooksList({ processedResults, currentText }) {

  const [startIndex, setStartIndex] = useState(START_INDEX)

  const dispatch = useDispatch()

  const loadMoreBooks = useCallback(() => {
    console.log(currentText)
    dispatch(loadMoreBooksAsync(currentText, startIndex))

    setStartIndex((prevIndex) => prevIndex + 30)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startIndex, currentText])

	const loading = useSelector((state) => state.isLoading.loading)

  const BookCards = useCallback(() => (processedResults.map((item) => {
    const thumbNail = item?.imageLinks?.thumbnail ?? ''

    return (
      <div className="preview" key={item.canonicalVolumeLink}>
        <BookCard
          thumbNail={thumbNail}
          title={item.title}
          category={item.categories}
          authors={item.authors}
          description={item?.description}
        />
      </div>
    )
  })), [processedResults])

  return (
    <>
      <div className="book-list">
        {loading ? <Loader /> : <BookCards />}
      </div>
      {processedResults.length ? <button className="load-more-btn" onClick={loadMoreBooks}>Load more</button> : ''}
    </>
  )
}

export default BooksList
