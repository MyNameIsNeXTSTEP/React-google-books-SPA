import booksBySearchText from './BooksReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    booksBySearchText: booksBySearchText,
})

export default allReducers