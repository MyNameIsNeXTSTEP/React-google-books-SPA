import booksBySearchText from './BooksReducer';
import isLoading from './LoadingReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    booksBySearchText: booksBySearchText,
    isLoading: isLoading
})

export default allReducers