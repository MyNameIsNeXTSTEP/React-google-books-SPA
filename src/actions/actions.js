import { SET_BOOKS } from '../constants/ReduxConstants';
import { apiKey } from '../auth/apiKey'

export const setBooks = (books, searchText) => {
  return {
    type: SET_BOOKS,
    payload: {
      books,
      searchText
    },
  };
};

export const getBooks = (searchText) => {
  return (dispatch) => {

     fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&maxResults=30&key=${apiKey}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((books) => {
        dispatch(setBooks(books.items, searchText));
      })
      .catch((error) => {
        console.log(error);
      })
  };
};
