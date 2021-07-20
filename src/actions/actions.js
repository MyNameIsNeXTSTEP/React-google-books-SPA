import { SET_BOOKS, SET_LOADER, LOAD_MORE_BOOKS } from '../constants/ReduxConstants';
import { apiKey } from '../auth/apiKey'

export const setBooks = (books, ammount, searchText) => {
  return {
    type: SET_BOOKS,
    payload: {
      books,
      ammount,
      searchText,
    },
  };
};

export const loadMoreBooks = (newBooks, currentText) => {
  return {
    type: LOAD_MORE_BOOKS,
    payload: {
      newBooks,
      currentText,
    },
  };
};

export const setLoader = (loading) => {
  return {
    type: SET_LOADER,
    payload: loading
  }
}

export const getBooks = (searchText) => {
  return (dispatch) => {
    dispatch(setLoader(true))

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&maxResults=30&key=${apiKey}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Bad response from server');
        }
        dispatch(setLoader(false))
        return response.json();
      })
      .then((books) => {
        dispatch(setBooks(books.items, books.totalItems, searchText));
      })
      .catch((error) => {
        console.log(error);
      })
    };
};

export const loadMoreBooksAsync = (searchText, startIndex) => {
  return (dispatch) => {

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&startIndex=${startIndex}&maxResults=30&key=${apiKey}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((books) => {
        dispatch(loadMoreBooks(books.items, searchText));
      })
      .catch((error) => {
        console.log(error);
      })
    };
};