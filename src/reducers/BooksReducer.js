import '../actions/actions';

const initialState = {
  
};

const booksBySearchText = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      const { searchText, books } = action.payload
      return {
        ...state,
        [searchText]: books,
      };
    default:
      return state;
  }
};

export default booksBySearchText;
