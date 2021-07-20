import '../actions/actions'

const initialState = false

const isLoading = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADER":
      const loading = action.payload
      return {
        ...state,
        loading: loading
      };
    default:
      return state;
  }
}

export default isLoading;