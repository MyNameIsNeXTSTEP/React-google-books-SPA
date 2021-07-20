import '../actions/actions';

const initialState = {};

const booksBySearchText = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      const { searchText, books, ammount } = action.payload
      return {
        ...state,
        [searchText]: books,
        ammount: ammount,
      };
    case "LOAD_MORE_BOOKS":
      const { currentText, newBooks } = action.payload
      return {
        ...state,
        [currentText]: [...state[currentText], ...newBooks],
      };
    default:
      return state;
  }
};

export default booksBySearchText;
